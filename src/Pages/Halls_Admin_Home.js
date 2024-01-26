import "../Styles/home_page_styles.css";
import { Render_Page_Navbar } from "../Non_Routable_Components/Pages_Sub_Components/Structural_Components/Bootstrap_Elements";
import { Home_Page_Content } from "../Non_Routable_Components/Pages_Sub_Components/Structural_Components/Page_Content";
import { Global_States } from "../Non_Routable_Components/Global_States";

export function Render_Home_Page(proprieties) {

  // SET STATE FOR RELOADING THE COMPONENT
  const { reloadComponent, setReloadComponent } = Global_States();

  // SET STATE FOR CHANGING THE PAGE CONTENT
  const { pageContent, setPageContent } = Global_States();

  // RENDER HTML THE ELEMENTS OF THE PAGE
  return (
    <div id="page" className="page">
      <div className="page_display">
        <div className="page_content">
          <Render_Page_Navbar
            picture_selection={false}
            setActivateHallAddition={proprieties.setActivateHallAddition}
            reloadComponent={reloadComponent}
            setReloadComponent={setReloadComponent}
            setPageContent={setPageContent}
          />
          <Home_Page_Content content={pageContent} activateHallPictureSelection={proprieties.setActivateHallPictureSelection} setReloadComponent={setReloadComponent} />
        </div>
      </div>
    </div>
  );
}
