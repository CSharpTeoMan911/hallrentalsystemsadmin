import {
  Set_Gradient_Flutuation_Animation,
  Unset_Gradient_Flutuation_Animation,
} from "../Non_Routable_Components/Animations";
import { Authenticate_User } from "../Non_Routable_Components/Firebase/Firebase_Auth";
import "../Styles/authentication_page_styles.css";

function Email_Input_Changed() {}

function Password_Input_Changed() {}

// AUTHENTICATE THE ADMIN
async function Authenticate_Admin(email_control_id, password_control_id) {
  // RETRIEVE THE HTML ELEMENT FOR EMAIL INPUT 
  const email_input = document.getElementById(email_control_id);
  
  // RETRIEVE THE HTML ELEMENT FOR PASSWORD INPUT
  const password_input = document.getElementById(password_control_id);

  // IF BOTH HTML ELEMENT INPUTS ARE NOT NULL
  if (email_control_id !== null && password_control_id !== null) {
    if (email_control_id !== undefined && password_control_id !== undefined) {
      
      // AUTHENTICATE THE USER
      var auth_result = await Authenticate_User(email_input.value, password_input.value);
      if(auth_result !== "Logged in") {
        // UI ERROR MESSAGE
      }
    } else {
    }
  } else {
  }
}

// RENDER THE APPLICATION'S AUTHENTICATION PAGE
export function Render_Authentication_Page() {

  // SET THE GRADIENT FLUCTUATION ANIMATIONS
  async function Interval_Setup() {
    await Unset_Gradient_Flutuation_Animation("login_form_element");
    await Set_Gradient_Flutuation_Animation(
      "login_form_element",
      1,
      20,
      { r: 68, g: 68, b: 68 },
      { r: 199, g: 199, b: 199 },
      100
    );
  }
  Interval_Setup();


  // CREATE THE HTML FOR THE FRONTEND  
  return (
    <div className="authentication_page">
      <div id="login_form_element" className="login_form">
        <h1 className="authentication_title">Log In</h1>

        <div className="auth_field_div">
          <p className="auth_field_subtitle">Email</p>
          <input
            id="email_input"
            className="auth_input"
            onChange={() => {
              Email_Input_Changed();
            }}
          />
        </div>

        <div className="auth_field_div">
          <p className="auth_field_subtitle">Password</p>
          <input
            id="password_input"
            type="password"
            className="auth_input"
            onChange={() => {
              Password_Input_Changed();
            }}
          />
        </div>

        <button
          className="auth_button"
          onClick={() => {
            Authenticate_Admin("email_input", "password_input");
          }}
        >
          Ok
        </button>
      </div>
    </div>
  );
}
