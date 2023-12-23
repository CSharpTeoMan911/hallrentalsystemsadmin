import "../../Styles/main_style.css";
import Render_Pictures_Element from "./Picture_Element"


export function Home_Page_Content(parameters) {
  
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
