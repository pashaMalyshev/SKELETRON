const React = require('react');
const Layout = require('./Layout');

function EditCard({ user, card }) {
  return (
    <Layout user={user}>
      <form method="POST" action={`/edit/${card.id}`}>
        <h3>Изменить карту</h3>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input type="text" className="form-control" name="title" defaultValue={card.title} />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <input type="text" className="form-control" name="description" defaultValue={card.description} />
        </div>
        <button type="submit" className="btnEditCard">Save and Home</button>
      </form>
    </Layout>
  );
}

module.exports = EditCard;
