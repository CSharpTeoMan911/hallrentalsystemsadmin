import { DeAuthenticate_User } from "../../Firebase/Firebase_Auth";
import { useEffect, useState } from "react";
import Render_Navigate_To_Current_Page from "../Page_Controls/Navigate_To_Current_Page";
import Render_Add_Picture_Button from "../Page_Controls/Add_Picture_Button";
import Render_Navigate_To_Previous_Page_Button from "../Page_Controls/Navigate_To_Previous_Page_Button";
import Render_Navigate_To_Next_Page_Button from "../Page_Controls/Navigate_To_Next_Page_Button";
import Render_Search_Button from "../Page_Controls/Search_Button";

export function Render_Nav_Bar({ theme, visible }) {
  if (visible === true) {
    if (theme === "dark") {
      return (
        <nav
          id="app_navbar"
          className="navbar navbar-expand-lg navbar-dark bg-dark"
        >
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
        <nav
          id="app_navbar"
          className="navbar navbar-expand-lg navbar-light bg-light"
        >
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
              <a className="nav-link custom_active" href="/pictures">
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

export function Render_Page_Navbar(proprieties) {
  const [pageIndex, setPageIndex] = useState(1);
  const [processing, setProcessing] = useState(false);

  if (proprieties.reloadComponent === true) {
    proprieties.setReloadComponent(false);
    Render_Navigate_To_Current_Page(proprieties);
  }

  useEffect(() => {
    Render_Navigate_To_Current_Page(proprieties);
  }, []);

  let current_style = "navbar-brand ";

  let action_button = undefined;
  if (window.location.pathname === "/") {
    action_button = "Halls\xa0\xa0\xa0+";
    current_style += "action_button_active";
  } else if (window.location.pathname === "/pictures") {
    action_button = "Pictures\xa0\xa0\xa0+";
    current_style += "action_button_active";
  } else if (window.location.pathname === "/logs") {
    action_button = "Logs\xa0\xa0\xa0";
    current_style += "action_button_inactive";
  }

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark page_navbar"
      style={{ position: "sticky", left: 0, top: 0 }}
    >
      <Render_Add_Picture_Button
        action_button={action_button}
        current_style={current_style}
        setReloadComponent={proprieties.setReloadComponent}
      />

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
              <a className="nav-link page_label">Page</a>
            </li>

            <Render_Navigate_To_Previous_Page_Button
              setPageContent={proprieties.setPageContent}
              pageIndex={pageIndex}
              setPageIndex={setPageIndex}
              processing={processing}
              setProcessing={setProcessing}
            />

            <input value={pageIndex} className="page_input" />

            <Render_Navigate_To_Next_Page_Button
              setPageContent={proprieties.setPageContent}
              pageIndex={pageIndex}
              setPageIndex={setPageIndex}
              processing={processing}
              setProcessing={setProcessing}
            />
          </div>
        </ul>
        <div className="d-flex">
          <input
            className="form-control mr-2 custom_searchbar"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />

          <Render_Search_Button />
        </div>
      </div>
    </nav>
  );
}
