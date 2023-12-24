import "../../../Styles/pictures_page_styles.css";
import { Delete_Storage_Image } from "../../Firebase/Firebase_Pictures";

export default function Render_Picture_Element(content) {
    return(
        <div
          className="jumbotron jumbotron-fluid custom_jumbotron"
          style={{ textAlign: "center" }}
        >
          <div className="container" style={{ color: "white" }}>
            <div className="picture_element_details">
              <div className="picture_element_name_container">
                <h1 className="picture_element_name">
                  {content.image.location}
                </h1>
              </div>
              <></>
              <button
                className="picture_delete"
                onClick={async () => {
                  await Delete_Storage_Image(content.image.location);
                  content.state(true);
                }}
              >
                &#10060;
              </button>
            </div>

            <div className="picture_element_container">
              <img
                className="picture_element"
                src={content.image["download_url"]}
              />
              <div></div>
            </div>
          </div>
        </div>
    );
}