import "../Styles/main_style.css"

export default function Render_Background_Image({ is_auth }) {
  console.log(is_auth);
  if (is_auth === true) {
    return <div className="main_background_image_style"></div>
  } else {
    return <div className="auth_background_image_style"></div>
  }
}
