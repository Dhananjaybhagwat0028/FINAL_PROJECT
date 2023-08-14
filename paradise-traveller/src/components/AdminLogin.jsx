import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const AdminLogin = () => {
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
        `http://localhost:8080/admin/login.paradise/${inputs.username}/${inputs.password}`
      )
      .then((response) => {
        Item = response;

        localStorage.setItem("key", JSON.stringify(Item));

        let item = JSON.parse(localStorage.getItem("key"));
        console.log(item.data.username + " info " + item.data.password);

        if (
          inputs.username == item.data.username &&
          inputs.password == item.data.password
        ) {
          navigate("/list");
        } else {
          localStorage.clear();
          navigate("/AdminLogin");
          setIsError(true);
          setTimeout(() => setIsError(false), 2500);
        }
        console.log(response.data + " fsd");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <>
      <Navbar />
      <h2 style={{ marginLeft: 600, marginTop: 20 }}>Admin LogIn </h2>
      <div>
        <div className="vh-100 d-flex">
          <form ref={formRef} className="needs-validation " noValidate>
            <div className="container">
              <div style={styles.container}>
                <div className="mb-3" style={{ marginBottom: 20 }}>
                  <label style={{ marginLeft: 500 }} className="form-label">
                    Username{" "}
                  </label>
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    placeholder="Enter username"
                    onChange={handleChange}
                    style={{ marginLeft: 500 }}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label style={{ marginLeft: 500 }} className="form-label">
                    Password{" "}
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter password"
                    onChange={handleChange}
                    style={{ marginLeft: 500 }}
                    required></input>
                </div>

                <div>
                  <button
                    type="submit"
                    class="btn btn-primary"
                    onClick={handleSubmit}
                    style={{ marginLeft: 500 }}>
                    SignIn
                  </button>

                  {isError && (
                    <div
                      className="alert alert-danger"
                      style={{ marginLeft: 500 }}>
                      Invalid_Credentials!
                    </div>
                  )}
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

export default AdminLogin;

// import { useState } from "react";
// import axios from "axios";
// //import "../components/login.css";
// import { Link, useNavigate } from "react-router-dom";
// //import swal from "sweetalert2";
// //import { useDispatch } from "react-redux";

// function AdminLogin() {
//   const navigate=useNavigate()
//   const [ausername, setUsername] = useState("");
//   const [apassword, setPassword] = useState("");
//   //const dispatch=useDispatch()
//   const [responseData, setResponseData] = useState([]);
//   const regex =
//     /^([a-zA-Z0-9_\.\-\ ])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//   const handleForm = (e) => {
//     e.preventDefault();
//     if (ausername === "") {
//       alert("please enter valid details!")

//     } else if (apassword === "") {
//       alert("success")
//       }
//      else {
//       checkUser();
//     }
//   };

//   const checkUser = async () => {
//     console.log("hel"+ausername+" "+apassword)
//        await axios.get(`http://localhost:8080/admin/login.paradise/${ausername}/${apassword}`)
//      .then(resp=>{
//         sessionStorage.setItem("ausername",resp.data.ausername)
//         sessionStorage.setItem("apassword",resp.data.apassword)

//           //dispatch({type:'IsLoggedIn'})

//         setResponseData(resp.data)
//       navigate('/List')
//     })
//     .catch(error=>{

//       alert("opps")  ;
//     })
//   };

//   return (
//     <div>
//       <div className="center">
//         <h5 className="p-3 text-center bg-info rounded-top bg-gradient text-white">Admin Login</h5>
//         <form>
//           <div className="txt_field">
//             <input
//               name="ausername"
//               type="text"
//               onChange={(e) => setUsername(e.target.value)}
//             />
//             <span></span>
//             <label>Admin Username</label>
//           </div>
//           <div className="txt_field">
//             <input
//               name="apassword"
//               type="text"
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <span></span>
//             <label>Password</label>
//           </div>
//           <br/>
//           <input
//             type="submit"
//             value="Login"
//             onClick={handleForm}
//           />
//         </form>
//       </div>
//     </div>
//   );
// }

// export default AdminLogin;
