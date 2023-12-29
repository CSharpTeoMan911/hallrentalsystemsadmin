export default function Render_Hall_Element(properties) {
  return (
    <div
      className="jumbotron jumbotron-fluid custom_jumbotron"
      style={{ textAlign: "center" }}
    >
      <div className="container" style={{ color: "white" }}>
        <h3>{properties.values.Name}</h3>
        <p>{"Capacity: "}{properties.values.Capacity}</p>
        <p>{"Location: "}{properties.values.Capacity}</p>
        <button/>
        <button/>
      </div>
    </div>
  );
}
