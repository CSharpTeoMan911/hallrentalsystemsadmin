import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Render_Home_Page } from "./Pages/Halls_Admin_Home";
import { Render_Nav_Bar } from "./Non_Routable_Components/Bootstrap_Elements";
import { Verify_If_User_Is_Logged_In } from "./Non_Routable_Components/Log_In_Session_Validator";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    if (Verify_If_User_Is_Logged_In() !== true) {
      if (window.location.pathname !== "/authentication") {
        document.location.pathname = "/authentication";
      }
    }
  });

  return (
    <>
      <Render_Nav_Bar theme={"light"} />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={Render_Home_Page} />
          <Route exact path="/authentication" Component={Render_Home_Page} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
