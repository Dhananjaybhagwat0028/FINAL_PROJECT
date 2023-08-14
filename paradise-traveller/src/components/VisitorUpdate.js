import { useState } from "react";
import axios from "axios";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { Navbar } from "react-bootstrap";

function VisitorUpdate() {
  const styles = {
    container: {
      width: 1300,
      height: 470,
      padding: 20,
      position: "relative",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      margin: "auto",
      borderColor: "#db0f62",
      borderRadius: 10,
      borderWidth: 0.5,
      borderStyle: "solid",
      boxShadow: "1px 1px 20px 5px #C9C9C9",
    },
    signinButton: {
      position: "relative",
      width: "25%",
      height: 40,
      backgroundColor: "#db0f62",
      color: "white",
      borderRadius: 5,
      border: "none",
      // marginTop: 10,
    },
    content: {},
  };

  const visitorState = useLocation();

  const [inputs, setInputs] = useState(visitorState.state);
  const navigate = useNavigate();
  const handleChange = (evnt) => {
    let paramName = evnt.target.name;
    let paramValue = evnt.target.value;
    console.log("hello1 " + inputs + paramName + paramValue);

    setInputs((values) => ({ ...values, [paramName]: paramValue }));
  };

  const handleSubmit = (evnt) => {
    console.log("hello1 " + inputs);
    evnt.preventDefault();

    //alert(JSON.stringify(inputs));

    axios
      .put(
        `http://localhost:8080/visitor/update.paradise/${inputs.username}`,
        inputs
      )
      .then((response) => {
        navigate("/profile");
        //alert(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div>
      <Navbar title="Update" />
      <div className="vh-100 d-flex">
        <form className="col-md-6">
          <div className="container">
            <div className="col-md-6">
              <label className="form-label">Aadhar Number : </label>
              <input
                type="text"
                name="aadharno"
                value={inputs.aadharno}
                onChange={handleChange}
                className="form-control"
                style={{ marginBottom: 20 }}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Name : </label>
              <input
                type="text"
                name="name"
                value={inputs.name}
                onChange={handleChange}
                className="form-control"
                style={{ marginBottom: 20 }}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Mobile Number : </label>
              <input
                type="text"
                name="mobno"
                value={inputs.mobno}
                onChange={handleChange}
                className="form-control"
                style={{ marginBottom: 20 }}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Email : </label>
              <input
                type="email"
                name="email"
                value={inputs.email}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Password : </label>
              <input
                type="password"
                name="password"
                value={inputs.password}
                onChange={handleChange}
                className="form-control"
              />{" "}
            </div>{" "}
            <div className="col-6 mt-10" style={{ marginTop: 40 }}>
              {" "}
              <button
                type="submit"
                className="btn btn-primary btn-lg active"
                onClick={handleSubmit}>
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default VisitorUpdate;
