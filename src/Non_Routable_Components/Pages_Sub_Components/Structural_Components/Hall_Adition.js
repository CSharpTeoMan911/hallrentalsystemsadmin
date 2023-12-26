export default function Render_Hall_Addition(proprieties) {
  return (
    <div id="page" className="page">
      <div className="jumbotron jumbotron-fluid element_addition_container">
        <div className="hall_name_container">
            <p>Hall name: </p>
            <input/>
        </div>
        <div className="hall_location_container">
            <p>Location: </p>
            <input/>
        </div>
        <div className="hall_Amenities_container">
            <p>Amenities: </p>
            <input/>
        </div>
      </div>
    </div>
  );
}
