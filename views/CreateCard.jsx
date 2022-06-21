const React = require('react');
const Layout = require('./Layout');

function CreateCard({ user }) {
  return (
    <Layout user={user}>
      <form method="POST" action={`/create/${user.id}`}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input type="text" className="form-control" id="name-input" name="title" />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <input type="text" className="form-control" id="exampleInputPassword1" name="description" />
        </div>
        <button type="submit" className="btnCreateCard">Create Card</button>
      </form>
    </Layout>
  );
}

module.exports = CreateCard;
