import { Render_Page_Navbar } from "./Bootstrap_Elements";
import { Global_States } from "../../../Non_Routable_Components/Global_States";

export function Render_Picture_Selection(properties){
    const { reloadComponent, setReloadComponent } = Global_States();
    const { pageContent, setPageContent } = Global_States();
    return(
        <div id="page" className="page">
        <div className="page_display">
          <div className="page_content">
          <Render_Page_Navbar
            picture_selection = {true}
            reloadComponent={reloadComponent}
            setReloadComponent={setReloadComponent}
            setPageContent={setPageContent}
          />
          </div>
        </div>
      </div>
    );
}