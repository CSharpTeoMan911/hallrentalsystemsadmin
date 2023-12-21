import "../Styles/main_style.css";
import { Render_Page_Navbar } from "./Bootstrap_Elements";
import { useState } from "react";

export default function Page_Content_Skeleton(parameters) {
  const [pageContent, setPageContent] = useState();
  //setPageContent("Test");
  console.log(pageContent);
  return (
    <div id="page" className="page">
      <div className="page_display">
        <div className="page_content">
          <Render_Page_Navbar content={setPageContent}/>
          <div className="expandable_content">{parameters.children}</div>
        </div>
      </div>
    </div>
  );
}
