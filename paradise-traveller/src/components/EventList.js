import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminNav from "./AdminNav";

function EventList() {
  const [responseData, setResponseData] = useState([]);

  const eventList = () => {
    axios
      .get("http://localhost:8080/event/find.paradise")
      .then((response) => {
        setResponseData(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    eventList();
  }, []);

  const eventDelete = (evnt) => {
    axios
      .delete(
        `http://localhost:8080/event/delete.paradise/${evnt.target.value}`
      )
      .then((response) => {
        eventList();
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <>
      <AdminNav />
      <div class="container mt-3">
        <h2>Event/Camp Information</h2>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>EventId</th>
              <th>Event Name</th>
              <th>Event Date</th>
              <th>Event Price</th>
              <th>
                <Link to="/eventAdd" class="btn btn-dark">
                  Add
                </Link>{" "}
              </th>
              <th>
                <Link to="/list" class="btn btn-primary">
                  Visitor List
                </Link>
              </th>
            </tr>
          </thead>
          <tbody>
            {responseData.map((val) => (
              <tr key="{val.id}">
                <td>{val.eventId}</td>
                <td>{val.eventName}</td>
                <td>{val.eventDate}</td>
                <td>{val.eventCost}</td>

                <td>
                  <Link
                    to="/list/eventlist/EventUpdate"
                    state={val}
                    class="btn btn-primary">
                    Update
                  </Link>{" "}
                </td>
                {/* <td><Link to="/car/upload" state={val.id} class="btn btn-primary"</td> >
       <img src={"http://localhost:8080/images/"+val.image}  width="70" height="70" alt="no image" ></img>
       </Link>  */}
                <td>
                  <button
                    type="button"
                    className="badge bg-danger"
                    id={val.id}
                    value={val.eventId}
                    onClick={eventDelete}>
                    X
                  </button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default EventList;
