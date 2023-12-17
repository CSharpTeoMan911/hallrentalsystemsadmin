import {
  Set_Gradient_Flutuation_Animation,
  Unset_Gradient_Flutuation_Animation,
} from "../Non_Routable_Components/Animations";
import { Authenticate_User } from "../Non_Routable_Components/Firebase/Firebase_Auth";
import "../Styles/authentication_page_styles.css";

function Email_Input_Changed() {}

function Password_Input_Changed() {}
async function Authenticate_Admin(email_control_id, password_control_id) {
  const email_input = document.getElementById(email_control_id);
  const password_input = document.getElementById(password_control_id);

  if (email_control_id !== null && password_control_id !== null) {
    if (email_control_id !== undefined && password_control_id !== undefined) {
      var auth_result = await Authenticate_User(email_input.value, password_input.value);
      if(auth_result !== "Logged in") {
        // UI ERROR MESSAGE
      }
    } else {
    }
  } else {
  }
}

export function Render_Authentication_Page() {
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
