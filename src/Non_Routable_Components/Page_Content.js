import "../Styles/main_style.css";
import { Render_Page_Navbar } from "./Bootstrap_Elements";
import { useEffect } from "react";

export default function Page_Content_Skeleton(parameters) {

  return (
    <div id="page" className="page">
      <div className="page_display">
        <div className="page_content">
          <Render_Page_Navbar/>
        </div>
      </div>
    </div>
  );
}

export function Page_Content(parameters) {
  console.log(parameters);
  return <div className="expandable_content">{parameters.children}</div>;
}
