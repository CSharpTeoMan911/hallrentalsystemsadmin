import { Load_Storage_Images } from "../Firebase/Firebase_Pictures";
import "../../Styles/main_style.css";

export default function Render_Navigate_To_Next_Page_Button(proprieties) {
  async function Navigate_To_Next_Pictures_Page() {
    let return_values = await Load_Storage_Images(1);
    await proprieties.setPageContent(return_values["return_value"]);
    if (return_values["return_value"] !== undefined) {
      if (return_values["is_last"] === false) {
        let index = proprieties.pageIndex;
        index++;
        await proprieties.setPageIndex(index);
      }
    }
  }
  return (
    <button className="page_selection">
      <p
        className="page_selection_arrow"
        onClick={async () => {
          if (proprieties.processing === false) {
            proprieties.setProcessing(true);
            switch (window.location.pathname) {
              case "/pictures":
                await Navigate_To_Next_Pictures_Page();
                break;
            }
            proprieties.setProcessing(false);
          }
        }}
      >
        &#9658;
      </p>
    </button>
  );
}
