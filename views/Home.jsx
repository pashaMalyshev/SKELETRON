const React = require('react');
const Layout = require('./Layout');

function Home({ user, card }) {
  return (
    <Layout user={user}>
      <main>
        {!user ? (
          <>
            <h1 className="mb-1">Мои карточки</h1>
            <div className="container">Здесь могли бы быть ваши карточки если бы вы зарегались...</div>
          </>
        ) : (
          <form method="GET" action="/create" id="create-card-form" data-userid={user.id}>
            <div className="container">

              <div className="container-header">
                <h1 className="mb-1">Создать карточку</h1>
                <button type="submit" className="btnAddCard">Create new Card</button>
              </div>

              <h3>Мои карточки</h3>
              <div className="cards">
                {card.map((currCard, i) => (
                  <div key={i} className="div-card">
                    <div className="card-title">{currCard.title}</div>
                    <div className="card-description">{currCard.description}</div>
                    <div className="button-card">
                      <a href={`/edit/${currCard.id}`} className="edit">edit</a>
                      <a href={`/delete/${currCard.id}`} className="delete">delete</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </form>
        )}
      </main>
    </Layout>
  );
}

module.exports = Home;
