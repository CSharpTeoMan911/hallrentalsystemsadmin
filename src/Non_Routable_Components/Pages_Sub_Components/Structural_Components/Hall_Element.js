import "../../../Styles/home_page_styles.css";
import Render_Image_Carousel from "./Image_Carousel";

export default function Render_Hall_Element(properties) {
  console.log(properties.values.Amenities);
  let amenities = [];
  for (let i = 0; i < properties.values.Amenities.length; i++) {
    amenities.push(
      <div key={i} className="hall_amenity">
        {properties.values.Amenities[i]}
      </div>
    );
  }

  return (
    <div
      className="jumbotron jumbotron-fluid home_page_jumbotron"
      style={{ textAlign: "center" }}
    >
      <div className="hall_element_control">
        <div className="hall_control_grid_section">
          <button className="hall_element_update">
            <img className="hall_element_update_img" src="https://cdn-icons-png.flaticon.com/128/9355/9355771.png"/>
          </button>
        </div>
        <div></div>
        <div className="hall_control_grid_section">
          <button className="hall_element_deletion">&#10060;</button>
        </div>
      </div>
      <div className="container" style={{ color: "white" }}>
        <h3 className="hall_element_name">{properties.values.Name}</h3>
        <Render_Image_Carousel images={properties.values.Hall_Images} />

        <div className="category_container">
          <h4 className="category_label">Capacity:&#160;</h4>
          <p className="category_value">{properties.values.Capacity}</p>
        </div>
        <div className="category_container">
          <h4 className="category_label">Location:&#160;</h4>
          <p className="category_value">{properties.values.Location}</p>
        </div>

        <div className="category_container">
          <div className="form-group">
            <h4 className="category_label">Amenities: </h4>
          </div>
        </div>
        <div className="hall_amenities" style={{ backgroundColor: "white" }}>
          {amenities}
        </div>
      </div>
    </div>
  );
}
