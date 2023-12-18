import "../Styles/main_style.css";

export default function Render_Background_Image(proprieties) {
  if (proprieties.is_auth === true) {
    return <div id="background_image" className="main_background_image_style"></div>;
  } else {
    return <div id="background_image" className="auth_background_image_style"></div>;
  }
}
