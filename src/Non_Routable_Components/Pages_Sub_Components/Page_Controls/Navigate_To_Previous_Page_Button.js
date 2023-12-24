import { Load_Storage_Images } from "../../Firebase/Firebase_Pictures";
import "../../../Styles/main_style.css";

export default function Render_Navigate_To_Previous_Page_Button(proprieties) {
  async function Navigate_To_Previous_Pictures_Page() {
    let return_values = await Load_Storage_Images(-1);
    await proprieties.setPageContent(return_values["return_value"]);
    if (return_values["return_value"] !== undefined) {
      if (proprieties.pageIndex > 1) {
        let index = proprieties.pageIndex;
        index--;
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
              case "/":
                break;
              case "/pictures":
                await Navigate_To_Previous_Pictures_Page();
                break;
            }
            proprieties.setProcessing(false);
          }
        }}
      >
        &#9668;
      </p>
    </button>
  );
}
