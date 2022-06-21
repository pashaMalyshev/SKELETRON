/* eslint-disable jsx-a11y/label-has-associated-control */
const React = require('react');
const Layout = require('./Layout');

function Register() {
  return (
    <Layout>
      <form method="POST" action="/auth/register">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" id="name-input" name="name" autoComplete="off" />
        </div>
        <div className="mb-3">
          <label className="form-label">Mail</label>
          <input type="text" className="form-control" id="mail-input" name="mail" autoComplete="off" />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" id="password-input" name="password" autoComplete="off" />
        </div>
        <div className="mb-3">
          <label className="form-label">Password confirmation</label>
          <input type="password" className="form-control" id="confirm-password-input" name="passwordConfirm" autoComplete="off" />
        </div>
        <button type="submit" className="btn btn-primary">Registration</button>
      </form>
    </Layout>
  );
}

module.exports = Register;
