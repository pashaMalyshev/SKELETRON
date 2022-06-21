const React = require('react');
const Layout = require('./Layout');

function Profile({ user }) {
  return (
    <Layout user={user}>
      <form method="POST" action={`/profile/${user.id}`} id="edit-form" data-userid={user.id}>

        <div className="container">

          <div className="stat">
            <div className="user-name-stat">
              <label htmlFor="">Имя пользователя: </label>
              <span>{user.name}</span>
            </div>

            <div className="user-mail-stat">
              <label htmlFor="">Почта: </label>
              <span>{user.mail}</span>
            </div>
          </div>

          <h2>Изменить настройки профиля:</h2>

          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" id="name-input" name="name" defaultValue={user.name} />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="text" className="form-control" id="mail-input" name="mail" defaultValue={user.mail} />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" id="changeInputPassword1" name="password" />
          </div>

          <div className="mb-3">
            <label className="form-label">Password Confirm</label>
            <input type="password" className="form-control" id="changeInputPassword2" name="passwordConfirm" />
          </div>

          <button type="submit" className="btn btn-primary">Save</button>

        </div>

      </form>
    </Layout>
  );
}

module.exports = Profile;
