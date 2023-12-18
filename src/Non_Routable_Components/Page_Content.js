import "../Styles/main_style.css";
import Handler from "../Non_Routable_Components/Page_Operational_Handle";

export default function Page_Content_Skeleton(parameters) {
  return (
    <div id="page" className="page">
      <div className="page_display">
        <div className="page_content">
          <Handler />
          <div className="expandable_content">{parameters.children}</div>
        </div>
      </div>
    </div>
  );
}
