import { Insert_Storage_Image } from "../../Firebase/Firebase_Halls";

export default function Render_Add_Hall_Button(proprieties) {
  async function Add_Hall() {
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

  return (
    <button
      className={proprieties.current_style}
      onClick={async () => {
        await Add_Hall();
      }}
    >
      {" "}
      {proprieties.action_button}
    </button>
  );
}
