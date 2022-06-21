const router = require('express').Router();
const bcrypt = require('bcrypt');
const ReactDOMServer = require('react-dom/server');
const React = require('react');

const { User } = require('../db/models');

const Register = require('../views/Register');
const Login = require('../views/Login');

router.get('/register', async (req, res) => {
  const element = React.createElement(Register);
  const html = ReactDOMServer.renderToStaticMarkup(element);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

router.post('/register', async (req, res) => {
  // console.log(req.body);
  const {
    name, mail, password, passwordConfirm,
  } = req.body;

  const existingUser = await User.findOne({ where: { mail } });

  if (existingUser) {
    res.send('Такой пользователь уже есть');
    return;
  }

  if (!existingUser && (password.length >= 8) && (password === passwordConfirm)) {
    const user = await User.create({
      name,
      mail,
      password: await bcrypt.hash(password, 10),
    });
    req.session.userId = user.id;
    res.redirect('/');
  } else {
    res.redirect('/auth/register');
  }
});

router.get('/login', async (req, res) => {
  const element = React.createElement(Login);
  const html = ReactDOMServer.renderToStaticMarkup(element);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

router.post('/login', async (req, res) => {
  const { mail, password } = req.body;
  const existingUser = await User.findOne({ where: { mail } });

  if (existingUser && await bcrypt.compare(password, existingUser.password)) {
    req.session.userId = existingUser.id;
    res.redirect('/');
  } else { res.redirect('/auth/login'); }
});

router.get('/logout', (req, res) => {
  // удаление сессии на сервере
  req.session.destroy((error) => {
    if (error) {
      res.status(500).json({ message: 'Ошибка при удалении сессии' });
    }
    res
      .clearCookie('user_sid') // серверное удаление куки по имени
      .redirect('/');
  });
});

module.exports = router;
