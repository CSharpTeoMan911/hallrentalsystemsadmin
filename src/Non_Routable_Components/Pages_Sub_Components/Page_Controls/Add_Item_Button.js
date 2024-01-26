import { Insert_Storage_Image } from "../../Firebase/Firebase_Pictures";

export default function Render_Add_Item_Button(proprieties) {
  async function Add_Picture() {
    let input = document.createElement("input");
    input.type = "file";
    input.onchange = async (_) => {
      var reader = new FileReader();
      reader.onload = async (e) => {
        await Insert_Storage_Image(input.files[0].name, reader.result);
        proprieties.setReloadComponent(true);
      };
      await reader.readAsArrayBuffer(input.files[0]);
    };
    input.click();
  }

  async function Add_Hall() {
    proprieties.setActivateHallAddition(true);
  }

  return (
    <button
      className={proprieties.current_style}
      onClick={async () => {
        if (proprieties.picture_selection === false) {
          switch (window.location.pathname) {
            case "/":
              Add_Hall();
              break;
            case "/pictures":
              await Add_Picture();
              break;
            case "/logs":
              break;
          }
        } else {
          
        }
      }}
    >
      {" "}
      {proprieties.action_button}
    </button>
  );
}
