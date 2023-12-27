import "../../../Styles/main_style.css";
import Render_Pictures_Element from "./Picture_Element"
import Render_Hall_Element from "./Hall_Element";
import { Load_Halls, Delete_Hall, Update_Hall } from "../../Firebase/Firebase_Halls"


export function Home_Page_Content(parameters) {
  if (parameters.content !== undefined && parameters.content !== null) {

    let halls = [];

    for (let i = 0; i < parameters.content.length; i++) {
      halls.push(
         <Render_Hall_Element image={parameters.content[i]} state={parameters.state}/>
      );
    }

    return <div className="expandable_content">{halls}</div>;
  }
}

export function Pictures_Page_Content(parameters) {
  if (parameters.content !== undefined && parameters.content !== null) {

    let pictures = [];

    for (let i = 0; i < parameters.content.length; i++) {
      pictures.push(
        <Render_Pictures_Element image={parameters.content[i]} state={parameters.state}/>
      );
    }

    return <div className="expandable_content">{pictures}</div>;
  }
}
