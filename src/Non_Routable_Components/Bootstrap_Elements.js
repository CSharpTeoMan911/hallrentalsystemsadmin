import { DeAuthenticate_User } from "./Firebase/Firebase_Auth";

export function Render_Nav_Bar({ theme, visible }) {
  if (visible === true) {
    if (theme === "dark") {
      return (
        <nav id="app_navbar" className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            HallRentals
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
                Halls <span className="sr-only">(current)</span>
              </a>
              <a className="nav-link" href="/pictures">
                Pictures
              </a>
              <a className="nav-link" href="/logs">
                Logs
              </a>
              <a
                className="nav-link"
                href="/"
                onClick={async () => {
                  await DeAuthenticate_User();
                }}
              >
                Logout
              </a>
            </div>
          </div>
        </nav>
      );
    } else if (theme === "light") {
      return (
        <nav id="app_navbar" className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">
            HallRentals
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
              <a className="nav-link" href="/">
                Halls <span className="sr-only">(current)</span>
              </a>
              <a className="nav-link" href="/pictures">
                Pictures
              </a>
              <a className="nav-link" href="/logs">
                Logs
              </a>
              <a
                className="nav-link active"
                href="/"
                onClick={async () => {
                  await DeAuthenticate_User();
                }}
              >
                Logout
              </a>
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
  } else if (visible === false || visible == undefined) {
    ////////////////////////////////
    // RETURN NO NAVBAR COMPONENT //
    ////////////////////////////////
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



export function Render_Page_Navbar(proprieties){
  return(
    <nav
    className="navbar navbar-expand-lg navbar-dark bg-dark page_navbar"
    style={{ position: "sticky", left: 0, top: 0 }}
  >
    <button className="navbar-brand action_button"> Pictures&nbsp;&nbsp;+ </button>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarScroll"
      aria-controls="navbarScroll"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul
        className="navbar-nav mr-auto my-2 my-lg-0 navbar-nav-scroll"
        style={{ maxHeight: "100px" }}
      >
        <div className="page_selection_container">
        <li className="nav-item active ">
          <a className="nav-link page_label">
            Page
          </a>
        </li>
          <button className="page_selection"><p className="page_selection_arrow">&#9668;</p></button>
          <input
            value={proprieties.page_index}
            className="page_input"
          />
          <button className="page_selection"><p className="page_selection_arrow">&#9658;</p></button>
        </div>
      </ul>
      <form className="d-flex">
        <input
          className="form-control mr-2 custom_searchbar"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  </nav>
  );
}
