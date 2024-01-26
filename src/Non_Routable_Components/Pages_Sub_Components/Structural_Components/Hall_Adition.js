import { useState } from "react";
import Render_Hall_Addition_Amenity from "./Hall_Adition_Amenity";
import { Insert_Hall } from "../../Firebase/Firebase_Halls";
import { Render_Notification } from "./Notification_System";

export default function Render_Hall_Addition(proprieties) {
  const [value, setValue] = useState({});
  const [capacity, setCapacity] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [type, setType] = useState();
  const [message, setMessage] = useState();

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

  console.log(value);
  function Capacity_Changed() {
    let hall_capacity = document.getElementById("hall_capacity");
    let regex = /\D/;
    let bool = regex.test(hall_capacity.value);

    if (bool === true) {
      if (hall_capacity.value !== "") {
        hall_capacity.value = capacity;
      }
    } else {
      setCapacity(Number(hall_capacity.value));
    }
  }

  return (
    <div id="page" className="page">
      <Render_Notification
        showNotification={showNotification}
        setShowNotification={setShowNotification}
        type={type}
        message={message}
      />
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
                  onChange={() => {
                    Capacity_Changed();
                  }}
                  className="form-control"
                  id="hall_capacity"
                  placeholder="1"
                />
              </div>

              <div className="form-group">
                <label>Price</label>
                <input
                  onChange={() => {
                    Capacity_Changed();
                  }}
                  className="form-control"
                  id="hall_price"
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
                    let location_name =
                      document.getElementById("location_name");
                    let hall_capacity =
                      document.getElementById("hall_capacity");
                    let hall_price = document.getElementById("hall_price");
                    let hall_capacity_num = undefined;
                    let hall_price_num = undefined;

                    if (hall_capacity.value === "") {
                      hall_capacity_num = 1;
                    } else {
                      hall_capacity_num = Number(hall_capacity.value);
                    }

                    if (hall_price.value === "") {
                      hall_price_num = 1;
                    } else {
                      hall_price_num = Number(hall_capacity.value);
                    }

                    let result = await Insert_Hall(
                      hall_name.value,
                      location_name.value,
                      hall_capacity_num,
                      hall_price_num,
                      value
                    );
                    if (result !== "Hall addition successful") {
                      setMessage(result);
                      setType("Error");
                      setShowNotification(true);
                    } else {
                      proprieties.setActivateHallAddition(false);
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
