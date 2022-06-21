const router = require('express').Router();
const bcrypt = require('bcrypt');
const ReactDOMServer = require('react-dom/server');
const React = require('react');

const Home = require('../views/Home');
const Profile = require('../views/Profile');
const NewProfileStat = require('../views/NewProfileStat');
const CreateCard = require('../views/CreateCard');
const EditCard = require('../views/EditCard');

const { User, Card } = require('../db/models');

router.get('/', async (req, res) => {
  const id = req.session.userId;
  const user = await User.findByPk(id);
  if (user) {
    const card = await Card.findAll({
      where: { user_id: id },
      order: [
        ['createdAt', 'DESC'],
      ],
    });
    const element = React.createElement(Home, { user, card });
    const html = ReactDOMServer.renderToStaticMarkup(element);
    res.write('<!DOCTYPE html>');
    res.end(html);
  } else {
    const element = React.createElement(Home, { user });
    const html = ReactDOMServer.renderToStaticMarkup(element);
    res.write('<!DOCTYPE html>');
    res.end(html);
  }
});

router.get('/profile/:id', async (req, res) => {
  const id = req.session.userId;
  const user = await User.findByPk(id);
  const element = React.createElement(Profile, { user });
  const html = ReactDOMServer.renderToStaticMarkup(element);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

router.put('/profile/:id', async (req, res) => {
  const {
    name, mail, password, passwordConfirm,
  } = req.body;

  const id = req.session.userId;

  const user = await User.findByPk(id);

  const changetName = name;
  const changetMail = mail;
  const changetPassword = password;
  const changetPasswordConfirm = passwordConfirm;

  user.name = changetName;
  user.mail = changetMail;
  if ((changetPassword.length >= 8) && (changetPassword === changetPasswordConfirm)) {
    const hashPass = await bcrypt.hash(changetPassword, 10);
    user.password = hashPass;
  }

  await user.save();

  const element = React.createElement(NewProfileStat, { user });
  const html = ReactDOMServer.renderToStaticMarkup(element);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

router.get('/create', async (req, res) => {
  const id = req.session.userId;
  const user = await User.findByPk(id);
  const element = React.createElement(CreateCard, { user });
  const html = ReactDOMServer.renderToStaticMarkup(element);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

router.post('/create/:id', async (req, res) => {
  const id = req.session.userId;
  const card = await Card.create({
    title: req.body.title,
    description: req.body.description,
    user_id: id,
  });
  res.redirect('/');
});

router.delete('/delete/:id', async (req, res) => {
  const card = await Card.findOne({ where: { id: req.params.id } });
  console.log(card);
  await card.destroy();

  res.send('this photo has deleted');
});

router.get('/edit/:id', async (req, res) => {
  const id = req.session.userId;
  const user = await User.findByPk(id);
  const cardId = req.params.id;
  const card = await Card.findOne({
    where: { id: cardId },
  });
  const element = React.createElement(EditCard, { user, card });
  const html = ReactDOMServer.renderToStaticMarkup(element);
  res.send(html);
});

router.post('/edit/:id', async (req, res) => {
  const { title, description } = req.body;

  const cardId = req.params.id;

  const titleValue = title;
  const descriptionValue = description;

  const card = await Card.findByPk(cardId);

  card.title = titleValue;
  card.description = descriptionValue;

  await card.save();
  res.redirect('/');
});

module.exports = router;
