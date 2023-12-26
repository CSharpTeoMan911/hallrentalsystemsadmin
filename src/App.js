import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Global_States } from "./Non_Routable_Components/Global_States";
import Render_Hall_Addition from "./Non_Routable_Components/Pages_Sub_Components/Structural_Components/Hall_Adition";
import { Render_Nav_Bar } from "./Non_Routable_Components/Pages_Sub_Components/Structural_Components/Bootstrap_Elements";
import Render_Background_Image from "./Non_Routable_Components/Pages_Sub_Components/Structural_Components/Background_Image";
import { Render_Authentication_Page } from "./Pages/Halls_Admin_Authentication";
import { Render_Home_Page } from "./Pages/Halls_Admin_Home";
import { Render_Pictures_Page } from "./Pages/Halls_Admin_Pictures";
import { Render_Logs_Page } from "./Pages/Halls_Admin_Logs";
import { Clear_Pictures_Local_Storage_Values } from "./Non_Routable_Components/Firebase/Firebase_Pictures";

import {
  Clear_All_Intervals,
  Set_Gradient_Flutuation_Animation,
} from "./Non_Routable_Components/Animations";
import { useState, useEffect } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/main_style.css";

function App() {
  Clear_Pictures_Local_Storage_Values();
  const [authState, setAuthState] = useState();
  const { activatePictureFocus, setActivatePictureFocus } = Global_States();
  const { activateHallAddition, setActivateHallAddition } = Global_States();

  useEffect(() => {
    const user_authenticated = localStorage.getItem("User Authenticated");

    if (user_authenticated === "True") {
      if (window.location.pathname === "/authentication") {
        window.location.pathname = "/";
      }
      setAuthState(true);
    } else {
      if (window.location.pathname !== "/authentication") {
        window.location.pathname = "/authentication";
      }
      setAuthState(false);
    }
  }, []);

  async function Interval_Setup() {
    await Clear_All_Intervals();
    await Set_Gradient_Flutuation_Animation(
      "main_body",
      1,
      50,
      { r: 22, g: 22, b: 22 },
      { r: 119, g: 119, b: 119 },
      60
    );
  }

  Interval_Setup();

  if (activatePictureFocus === true) {
    return (
      <>
        <Render_Background_Image is_auth={authState} />
        <Render_Nav_Bar theme={"light"} visible={authState} />
      </>
    );
  } else if (activateHallAddition === true) {
    return (
      <>
        <Render_Background_Image is_auth={authState} />
        <Render_Nav_Bar theme={"light"} visible={authState} />
        <Render_Hall_Addition setActivateHallAddition={setActivateHallAddition}/>
      </>
    );
  } else {
    return (
      <>
        <Render_Background_Image is_auth={authState} />
        <Render_Nav_Bar theme={"light"} visible={authState} />
        <BrowserRouter>
          <Routes>
            <Route
              exact
              path="/authentication"
              Component={Render_Authentication_Page}
            />
            <Route
              exact
              path="/"
              Component={() => (
                <Render_Home_Page
                  setActivateHallAddition={setActivateHallAddition}
                />
              )}
            />
            <Route
              exact
              path="/pictures"
              Component={() => (
                <Render_Pictures_Page
                  setActivatePictureFocus={setActivatePictureFocus}
                />
              )}
            />
            <Route exact path="/logs" Component={Render_Logs_Page} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
