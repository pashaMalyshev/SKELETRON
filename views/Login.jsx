/* eslint-disable jsx-a11y/label-has-associated-control */
const React = require('react');
const Layout = require('./Layout');

function Login() {
  return (
    <Layout>
      <form method="POST" action="/auth/login">
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="text" className="form-control" id="name-input" name="mail" />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" name="password" />
        </div>
        <button type="submit" className="btn btn-primary">Sign in</button>
      </form>
    </Layout>
  );
}

module.exports = Login;
