import "../styles/navbar.css";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-black fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" id="brand-name" href="#">
          <span className="brand-yellow">TUT</span> coin
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#hero-section-two"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("my-hero-section")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#social-media"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("social-media")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
