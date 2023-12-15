import { Set_Gradient_Flutuation_Animation, Unset_Gradient_Flutuation_Animation } from "../Non_Routable_Components/Animations";
import "../Styles/authentication_page_styles.css";

function Email_Input_Changed() {
    
}

function Password_Input_Changed() {
    
}

function Authenticate_Admin() {

}

export function Render_Authentication_Page() {
    async function Interval_Setup()
    {
      await Unset_Gradient_Flutuation_Animation("login_form_element");
      await Set_Gradient_Flutuation_Animation("login_form_element", 1, 20, {r:68, g:68, b:68}, {r:199, g:199, b:199}, 100);
    }
    Interval_Setup();
    return (
    <div className="authentication_page">
      <div id="login_form_element" className="login_form">
        <h1 className="authentication_title">Log In</h1>

        <div className="auth_field_div">
          <p className="auth_field_subtitle">Email</p>
          <input className="auth_input" onChange={()=>{Email_Input_Changed();}}/>
        </div>

        <div className="auth_field_div">
          <p className="auth_field_subtitle">Password</p>
          <input type="password" className="auth_input" onChange={()=>{Password_Input_Changed();}}/>
        </div>

        <button className="auth_button" onClick={()=>{Authenticate_Admin();}}>Ok</button>
      </div>
    </div>
  );
}
