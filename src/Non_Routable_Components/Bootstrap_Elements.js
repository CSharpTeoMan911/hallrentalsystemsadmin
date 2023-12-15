export function Render_Nav_Bar({ theme, visible }) {
  if (visible === true) {
    if (theme === "dark") {
      return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
              <a className="nav-link" href="#">
                Features
              </a>
              <a className="nav-link" href="#">
                Pricing
              </a>
              <a className="nav-link disabled">Disabled</a>
            </div>
          </div>
        </nav>
      );
    } else if (theme === "light") {
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
              <a className="nav-link" href="#">
                Features
              </a>
              <a className="nav-link" href="#">
                Pricing
              </a>
              <a className="nav-link disabled">Disabled</a>
            </div>
          </div>
        </nav>
      );
    } else {
      return (
        <div
          style={{
            color: "white",
            backgroundColor: "red",
            width: "100%",
            height: "40px",
            padding: "10px",
          }}
        >
          Unknown theme. Set the "theme" prop parameter as "light" or "dark".
        </div>
      );
    }
  } else if (visible === false) {
    // RETURN NO NAVBAR COMPONENT
  } else {
    return (
      <div
        style={{
          color: "white",
          backgroundColor: "red",
          width: "100%",
          height: "40px",
          padding: "10px",
        }}
      >
        Unknown visiblity setting. Set the "visible" prop parameter as "true" or
        "false" as bool.
      </div>
    );
  }
}
