import { useState } from "react";
import Render_Hall_Addition_Amenity from "./Hall_Adition_Amenity";
import { Insert_Hall } from "../../Firebase/Firebase_Halls";

export default function Render_Hall_Addition(proprieties) {
  const [value, setValue] = useState({});
  const [capacity, setCapacity] = useState("");

  let options = [
    "jacuzzy",
    "massage",
    "pool",
    "computers",
    "robots",
    "playstation",
  ];
  let options_controls = [];

  for (let i = 0; i < options.length; i++) {
    options_controls.push(
      <Render_Hall_Addition_Amenity
        key={i}
        context={options[i]}
        value={value}
        setValue={setValue}
      />
    );
  }

  function Capacity_Changed() {
    let hall_capacity = document.getElementById("hall_capacity");
    let regex = /\D/;
    let bool = regex.test(hall_capacity.value);

    if(bool === true) {
        if(hall_capacity.value !== ""){
            hall_capacity.value = capacity;
        }
    }
    else{
        setCapacity(Number(hall_capacity.value));
    }
  }

  return (
    <div id="page" className="page">
      <div className="normal_page_display">
        <div className="page_content">
          <div className="jumbotron jumbotron-fluid element_addition_container">
            <div>
              <div className="hall_controls">
                <button
                  className="cancel_hall_addition"
                  onClick={() => {
                    proprieties.setActivateHallAddition(false);
                  }}
                >
                  &#10060;
                </button>
              </div>
              <div className="form-group">
                <label>Hall name</label>
                <input
                  className="form-control"
                  id="hall_name"
                  placeholder="Hall"
                />
              </div>
              <div className="form-group">
                <label>Location</label>
                <input
                  className="form-control"
                  id="location_name"
                  placeholder="Address"
                />
              </div>

              <div className="form-group">
                <label>Capacity</label>
                <input
                  onChange={()=>{Capacity_Changed();}}
                  className="form-control"
                  id="hall_capacity"
                  placeholder="1"
                />
              </div>

              <div className="form-group">
                <label>Amenities</label>
                <div className="hall_adition_amenities">{options_controls}</div>
              </div>

              <div className="hall_addition_control">
                <button
                  className="hall_addition_button"
                  onClick={async () => {
                    let hall_name = document.getElementById("hall_name");
                    let location_name = document.getElementById("location_name");
                    let hall_capacity = document.getElementById("hall_capacity");
                    let num = undefined;

                    if(hall_capacity.value === "") {
                        num = 1;
                    }
                    else{
                        num = Number(hall_capacity.value);
                    }

                    if(hall_name.value !== ""){
                        if(location_name.value !== ""){
                            await Insert_Hall(hall_name.value, location_name.value, num, value);
                            proprieties.setActivateHallAddition(false);
                        }
                        else{

                        }
                    }
                    else{

                    }
                  }}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
