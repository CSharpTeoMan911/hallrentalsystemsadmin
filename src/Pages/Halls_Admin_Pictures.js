import "../Styles/pictures_page_styles.css";
import { Render_Page_Navbar } from "../Non_Routable_Components/Pages_Sub_Components/Structural_Components/Bootstrap_Elements";
import { Pictures_Page_Content } from "../Non_Routable_Components/Pages_Sub_Components/Structural_Components/Page_Content";
import { Global_States } from "../Non_Routable_Components/Global_States";

export function Render_Pictures_Page() {
  // SET STATE THAT RELOADS THE COMPONENT
  const { reloadComponent, setReloadComponent } = Global_States();

  // SET STATE THAT SETS THE PAGE CONTENT
  const { pageContent, setPageContent } = Global_States();

  // RENDER PAGE HTML
  return (
    <div id="page" className="page">
      <div className="page_display">
        <div className="page_content">
          <Render_Page_Navbar
            picture_selection={false}
            reloadComponent={reloadComponent}
            setReloadComponent={setReloadComponent}
            setPageContent={setPageContent}
          />
          <Pictures_Page_Content
            content={pageContent}
            state={setReloadComponent}
          />
        </div>
      </div>
    </div>
  );
}
