import { useState } from "react";
import axios from "axios";

import AdminNav from "./AdminNav";

const EventAdd = () => {
  const [inputs, setInputs] = useState({});
  const handleChange = (evnt) => {
    let paramName = evnt.target.name;
    let paramValue = evnt.target.value;
    console.log(paramName);
    console.log(paramValue);
    setInputs((values) => ({ ...values, [paramName]: paramValue }));
  };

  const handleSubmit = (evnt) => {
    evnt.preventDefault();
    // alert(JSON.stringify(inputs));

    axios
      .post("http://localhost:8080/event/addEvent.paradise", inputs)
      .then((response) => {
        //alert(response.data);

        window.location.href = "/list/eventlist";
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div>
      <AdminNav title="EventAdd" />
      <div className="form-control">
        <form className="col g-3">
          <div className="mb-3">
            <label className="form-label">Event Name : </label>
            <input
              type="text"
              name="eventName"
              value={inputs.eventName}
              onChange={handleChange}
              className="form-control"
              style={{ marginBottom: 20 }}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Event Duration : </label>
            <input
              type="text"
              name="eventDate"
              value={inputs.eventDate}
              onChange={handleChange}
              className="form-control"
              style={{ marginBottom: 20 }}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Event Cost : </label>
            <input
              type="number"
              name="eventCost"
              value={inputs.eventCost}
              onChange={handleChange}
              className="form-control"
              style={{ marginBottom: 20 }}
            />
          </div>

          <div className="col-12" style={{ marginTop: 40 }}>
            {" "}
            <button
              type="submit"
              className="btn btn-primary w-100 mt-2"
              onClick={handleSubmit}>
              Add Event/Camp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventAdd;
