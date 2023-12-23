import "../Styles/main_style.css";
import "../Styles/pictures_page_styles.css";
import { Render_Page_Navbar } from "./Bootstrap_Elements";
import { Delete_Storage_Image } from "./Firebase/Firebase_Pictures";


export default function Page_Content_Skeleton(parameters) {
  return (
    <div id="page" className="page">
      <div className="page_display">
        <Render_Page_Navbar />
      </div>
    </div>
  );
}

export function Pictures_Page_Content(parameters) {
  if (parameters.content !== undefined && parameters.content !== null) {

    let pictures = [];

    for (let i = 0; i < parameters.content.length; i++) {
      pictures.push(
        <div
          className="jumbotron jumbotron-fluid custom_jumbotron"
          style={{ textAlign: "center" }}
        >
          <div className="container" style={{ color: "white" }}>
            <div className="picture_element_details">
              <div className="picture_element_name_container">
                <h1 className="picture_element_name">
                  {parameters.content[i].location}
                </h1>
              </div>
              <></>
              <button
                className="picture_delete"
                onClick={async () => {
                  await Delete_Storage_Image(parameters.content[i].location);
                  parameters.state(true);
                }}
              >
                &#10060;
              </button>
            </div>

            <div className="picture_element_container">
              <img
                className="picture_element"
                src={parameters.content[i]["download_url"]}
              />
              <div></div>
            </div>
          </div>
        </div>
      );
    }

    return <div className="expandable_content">{pictures}</div>;
  }
}
