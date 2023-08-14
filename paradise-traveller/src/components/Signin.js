import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Navbarr from "./Navbar";

const SignIn = () => {
  var Item;
  const [inputs, setInputs] = useState({});
  let formRef = useRef();
  let [isError, setIsError] = useState(false);

  let navigate = useNavigate();
  const handleChange = (evnt) => {
    let paramName = evnt.target.name;
    let paramValue = evnt.target.value;
    // console.log(paramName);
    // console.log(paramValue);

    setInputs((values) => ({ ...values, [paramName]: paramValue }));
  };

  const handleSubmit = (evnt) => {
    evnt.preventDefault();
    evnt.stopPropagation();

    formRef.current.classList.add("was-validated");
    if (!formRef.current.checkValidity()) {
      return;
    }

    axios
      .get(
        `http://localhost:8080/visitor/login.paradise/${inputs.username}/${inputs.password}`
      )
      .then((response) => {
        localStorage.setItem("key", JSON.stringify(response));

        let item = JSON.parse(localStorage.getItem("key"));
        console.log(item.data.username + "  " + item.data.password);

        if (
          inputs.username == item.data.username &&
          inputs.password == item.data.password
        ) {
          navigate("/");
        } else {
          localStorage.clear();
          navigate("/Signin");
          setIsError(true);
          setTimeout(() => setIsError(false), 2000);
        }
        console.log(response.data + " fsd");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <>
      <Navbarr usern={inputs.username} />
      <div>
        <h1 style={{ marginLeft: 650, marginTop: 20 }}>LogIn </h1>
        <div className="vh-100 d-flex">
          <form ref={formRef} className="needs-validation " noValidate>
            <div className="container">
              <div style={styles.container}>
                <div className="mb-3" style={{ marginBottom: 20 }}>
                  <label className="form-label" style={{ marginLeft: 500 }}>
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    placeholder="Enter username"
                    onChange={handleChange}
                    style={{ marginBottom: 10, marginLeft: 500 }}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" style={{ marginLeft: 500 }}>
                    Password{" "}
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter password"
                    onChange={handleChange}
                    style={{ marginBottom: 10, marginLeft: 500 }}
                    required></input>
                </div>

                <div>
                  <button
                    type="submit"
                    class="btn btn-primary"
                    onClick={handleSubmit}
                    style={{ marginBottom: 10, marginLeft: 500 }}>
                    SignIn
                  </button>

                  {isError && (
                    <div
                      style={{ marginBottom: 10, marginLeft: 500 }}
                      className="alert alert-danger">
                      Invalid_Credentials
                    </div>
                  )}

                  <div style={{ marginBottom: 10, marginLeft: 500 }}>
                    Don't_have_an_account?<Link to="/signup"> SignUp_Here</Link>
                  </div>
                  <div style={{ marginBottom: 10, marginLeft: 500 }}>
                    <Link to="/AdminLogin">Admin_SignIn_Here</Link>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

const styles = {
  container: {
    width: 400,
    height: 300,
    padding: 20,
    position: "relative",
    top: 0,
    left: 0,
    right: 0,
    marginBottom: 20,
    marginTop: 20,
    margin: "auto",
    borderColor: "#db0f62",
    borderRadius: 10,
  },
  signinButton: {
    position: "relative",
    width: "50%",
    height: 40,
    backgroundColor: "#db0f62",
    color: "white",
    borderRadius: 5,
    border: "none",
    marginBottom: 20,
  },
};

export default SignIn;
