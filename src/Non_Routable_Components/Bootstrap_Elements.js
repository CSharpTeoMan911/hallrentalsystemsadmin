import { DeAuthenticate_User } from "./Firebase/Firebase_Auth";
import {
  Load_Storage_Images,
  Insert_Storage_Image,
} from "./Firebase/Firebase_Pictures";
import { useEffect, setState, useState } from "react";
import { Global_States } from "./Global_States";
import { Pictures_Page_Content } from "./Page_Content";

let page_index = 0;

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
  const { reloadComponent, setReloadComponent } = Global_States();
  const { pageContent, setPageContent } = Global_States();
  const [pageIndex, setPageIndex] = useState(1);
  const [processing, setProcessing] = useState(false);


  if (reloadComponent === true) {
    setReloadComponent(false);
    Navigate_To_Current_Page()
  }

  async function Add_Picture() {
    let input = document.createElement("input");
    input.type = "file";
    input.onchange = async(_) => {
      var reader = new FileReader();
      reader.onload = async (e) => {
        await Insert_Storage_Image(input.files[0].name, reader.result);
        setReloadComponent(true);
      }
      await reader.readAsArrayBuffer(input.files[0]);
    };
    input.click();
  }

  async function Navigate_To_Previous_Pictures_Page() {
    let return_values = await Load_Storage_Images(-1);
    await setPageContent(return_values["return_value"]);
    if (return_values["return_value"] !== undefined) {
      if (pageIndex > 1) {
        let index = pageIndex;
        index--;
        await setPageIndex(index);
      }
    }
  }

  async function Navigate_To_Current_Page() {
    switch (window.location.pathname) {
      case "/pictures":
        let return_values = await Load_Storage_Images(0);
        await setPageContent(return_values["return_value"]);
        break;
    }
  }

  async function Navigate_To_Next_Pictures_Page() {
    let return_values = await Load_Storage_Images(1);
    await setPageContent(return_values["return_value"]);
    if (return_values["return_value"] !== undefined) {
      if (return_values["is_last"] === false) {
        let index = pageIndex;
        index++;
        await setPageIndex(index);
      }
    }
  }

  useEffect(() => {
    Navigate_To_Current_Page();
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
    <div className="page_content">
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark page_navbar"
        style={{ position: "sticky", left: 0, top: 0 }}
      >
        <button
          className={current_style}
          onClick={async () => {
            await Add_Picture();
          }}
        >
          {" "}
          {action_button}
        </button>
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
              <button className="page_selection">
                <p
                  className="page_selection_arrow"
                  onClick={async () => {
                    if (processing === false) {
                      setProcessing(true);
                      switch (window.location.pathname) {
                        case "/pictures":
                          await Navigate_To_Previous_Pictures_Page();
                          break;
                      }
                      setProcessing(false);
                    }
                  }}
                >
                  &#9668;
                </p>
              </button>
              <input value={pageIndex} className="page_input" />
              <button className="page_selection">
                <p
                  className="page_selection_arrow"
                  onClick={async () => {
                    if (processing === false) {
                      setProcessing(true);
                      switch (window.location.pathname) {
                        case "/pictures":
                          await Navigate_To_Next_Pictures_Page();
                          break;
                      }
                      setProcessing(false);
                    }
                  }}
                >
                  &#9658;
                </p>
              </button>
            </div>
          </ul>
          <div className="d-flex">
            <input
              className="form-control mr-2 custom_searchbar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success"
              onClick={() => {
                Item_Search();
              }}
            >
              Search
            </button>
          </div>
        </div>
      </nav>
      <Pictures_Page_Content content={pageContent} state={setReloadComponent} />
    </div>
  );
}

function Item_Search() {
  console.log("!!! SEARCHING !!!");
}
