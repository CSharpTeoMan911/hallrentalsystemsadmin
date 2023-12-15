import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Render_Home_Page } from "./Pages/Halls_Admin_Home";
import { Render_Authentication_Page } from "./Pages/Halls_Admin_Authentication"
import { Render_Nav_Bar } from "./Non_Routable_Components/Bootstrap_Elements";
import { Verify_If_User_Is_Logged_In } from "./Non_Routable_Components/Log_In_Session_Validator";
import {Clear_All_Intervals, Set_Gradient_Flutuation_Animation } from "./Non_Routable_Components/Animations"
import "./Styles/main_style.css"
import { useState } from "react";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useEffect } from "react";

function App() {
  let [authState, setAuthState] = useState();
  useEffect(() => {
    if (Verify_If_User_Is_Logged_In() !== true) {
      if (window.location.pathname !== "/authentication") {
        window.location.pathname = "/authentication";
        setAuthState(true);
      } else {
        setAuthState(false);
      }
    }               
  }, []);
  

  async function Interval_Setup()
  {
    await Clear_All_Intervals();
    await Set_Gradient_Flutuation_Animation("main_body", 1, 50, {r:100, g:100, b:100}, {r:170, g:170, b:170}, 60);
  }

  Interval_Setup();
  return (
    <>
      <Render_Nav_Bar theme={"light"} visible={authState}/>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={Render_Home_Page} />
          <Route exact path="/authentication" Component={Render_Authentication_Page} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
