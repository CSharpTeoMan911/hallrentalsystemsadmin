import { DeAuthenticate_User } from "./Firebase/Firebase_Auth";
import { Load_Storage_Images } from "./Firebase/Firebase_Pictures";
import { useEffect } from "react";

let page_index = 0;

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



export function Render_Page_Navbar(proprieties){
  useEffect(()=>{
    //proprieties.state.setPageContent("Test");
    console.log(proprieties.setPageContent);
  })

  Set_Page_Index(0);
  let index = Get_Page_Index();
  let current_style = "navbar-brand ";
  Load_Storage_Images(0);

  //proprieties.setPageContent("Test");

  let action_button = undefined;
  if (window.location.pathname === "/") {
    action_button = "Halls\xa0\xa0\xa0+";
    current_style += "action_button_active";
  } else if (window.location.pathname === "/pictures") {
    action_button = "Pictures\xa0\xa0\xa0+";
    current_style += "action_button_active";
  } else if (window.location.pathname === "/logs") {
    current_style += "action_button_inactive";
  }

  return(
    <nav
    className="navbar navbar-expand-lg navbar-dark bg-dark page_navbar"
    style={{ position: "sticky", left: 0, top: 0 }}
  >
    <button className={current_style}> {action_button}</button>
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
          <button className="page_selection"><p className="page_selection_arrow" onClick={()=>{Navigate_To_Previous_Page()}}>&#9668;</p></button>
          <input
            value={index}
            className="page_input"
          />
          <button className="page_selection"><p className="page_selection_arrow" onClick={()=>{Navigate_To_Next_Page();}}>&#9658;</p></button>
        </div>
      </ul>
      <div className="d-flex">
        <input
          className="form-control mr-2 custom_searchbar"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" onClick={()=>{Item_Search()}}>
          Search
        </button>
      </div>
    </div>
  </nav>
  );
}

function Get_Page_Index() {
  let page_index = localStorage.getItem("page_index")

  if(page_index === undefined || page_index === null) {
    Set_Page_Index(1);
    page_index = 1;
  }

  return page_index;
}

function Set_Page_Index(index) {
  localStorage.setItem("page_index", index)
}

async function Navigate_To_Previous_Page() {
  let return_value = await Load_Storage_Images(-1);
  if(return_value !== undefined){
    let page_index = Get_Page_Index();
    if(page_index > 1) {
      page_index--;
      Set_Page_Index(page_index);
    }
    console.log(page_index);
  }
}

async function Navigate_To_Next_Page() {
  let return_value = await Load_Storage_Images(1);
  if(return_value !== undefined){
    let page_index = Get_Page_Index();
    page_index++;
    Set_Page_Index(page_index);
    console.log(page_index);
  }
}

function Item_Search() {
  console.log("!!! SEARCHING !!!");
}

