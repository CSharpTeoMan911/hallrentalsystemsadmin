import { Load_Storage_Images } from "../../Firebase/Firebase_Pictures";
import { Load_Halls } from "../../Firebase/Firebase_Halls";

export default function Render_Navigate_To_Current_Page(proprieties) {
  async function Navigate_To_Current_Page() {
    switch (window.location.pathname) {
      case "/":
        
        break;
      case "/pictures":
        let return_values = await Load_Storage_Images(0);
        await proprieties.setPageContent(return_values["return_value"]);
        break;
    }
  }

  return <>{Navigate_To_Current_Page()}</>;
}
