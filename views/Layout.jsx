const React = require('react');

function Layout({ user, children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <title>Skelet</title>
        <link rel="stylesheet" href="/style/style.css" />
        {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossOrigin="anonymous" /> */}
      </head>
      <body>
        {!user && (
        <nav className="navbar">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <div className="nav-home"><a href="/" className="nav-link" tabIndex="-1" role="button" aria-disabled="true">Home</a></div>
                <div className="nav-reg-a">
                  <a href="/auth/register" className="nav-reg">Registration</a>
                  <a href="/auth/login" className="nav-reg">Login</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
        )}
        {user && (
        <nav className="navbar">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <div className="nav-home"><a href="/" className="nav-link" tabIndex="-1" role="button" aria-disabled="true">Home</a></div>
                <div className="nav-reg-a">
                  <a href={`/profile/${user.id}`} className="nav-reg">{`Profile: ${user.name}`}</a>
                  <a href="/auth/logout" role="button" className="nav-reg">Logout</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
        )}
        {children}
        <script defer src="/js/editProfile.js" />
        <script defer src="/js/Card.js" />
      </body>
    </html>
  );
}

module.exports = Layout;
