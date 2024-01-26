import "../../../Styles/main_style.css";
import Render_Pictures_Element from "./Picture_Element";
import Render_Hall_Element from "./Hall_Element";

export function Home_Page_Content(parameters) {
  if (parameters.content !== undefined && parameters.content !== null) {
    let halls = [];

    let keys = Object.keys(parameters.content);

    for (let i = 0; i < keys.length; i++) {
      halls.push(
        <Render_Hall_Element
          key={i}
          values={parameters.content[keys[i]]}
          setReloadComponent={parameters.setReloadComponent}
          activateHallPictureSelection={parameters.activateHallPictureSelection}
        />
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
        <Render_Pictures_Element
          key={i}
          image={parameters.content[i]}
          state={parameters.state}
        />
      );
    }
    
    return <div className="expandable_content">{pictures}</div>;
  }
}
