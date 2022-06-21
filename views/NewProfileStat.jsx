const React = require('react');

function NewProfileStat({ user }) {
  return (
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
  );
}

module.exports = NewProfileStat;
