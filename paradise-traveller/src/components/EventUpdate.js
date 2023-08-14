import { useState } from "react";
import axios from "axios";
import { useLocation, Link } from "react-router-dom";
import AdminNav from "./AdminNav";

function EventUpdate() {
  const visitorState = useLocation();

  const [inputs, setInputs] = useState(visitorState.state);

  const handleChange = (evnt) => {
    let paramName = evnt.target.name;
    let paramValue = evnt.target.value;
    console.log("hello1 " + inputs + paramName + paramValue);

    setInputs((values) => ({ ...values, [paramName]: paramValue }));
  };

  const handleSubmit = (evnt) => {
    console.log("hello1 " + inputs);
    evnt.preventDefault();
    //  alert(JSON.stringify(inputs));

    axios
      .put(
        `http://localhost:8080/event/update.paradise/${inputs.eventId}`,
        inputs
      )
      .then((response) => {
        alert(response.data);
        window.location.href = "/list/eventlist";
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div>
      <AdminNav title="Update Camp" />
      <form action="put" onSubmit={handleSubmit}>
        <div>
          <div>
            <form>
              <div class="mb-3 mt-3">
                <input
                  type="hidden"
                  name="eventId"
                  value={inputs.eventId}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label class="form-label">Event Name</label>
                <input
                  type="text"
                  name="eventName"
                  value={inputs.eventName}
                  onChange={handleChange}
                  style={{ marginBottom: 20 }}
                  className="form-control"
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Event Duration</label>
                <input
                  type="text"
                  name="eventDate"
                  value={inputs.eventDate}
                  onChange={handleChange}
                  style={{ marginBottom: 20 }}
                  className="form-control"
                />
                <br></br>
              </div>

              <div className="col-md-6">
                <label className="form-label">Event Cost</label>
                <input
                  type="number"
                  name="eventCost"
                  value={inputs.eventCost}
                  onChange={handleChange}
                  style={{ marginBottom: 20 }}
                  className="form-control"
                />

                <div className="col-12" style={{ marginTop: 40 }}>
                  {" "}
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleSubmit}>
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </form>
    </div>
  );
}
export default EventUpdate;
