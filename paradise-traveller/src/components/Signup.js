import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const Signup = () => {
  const styles = {
    container: {
      width: 1200,
      height: 475,
      padding: 20,
      position: "relative",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      margin: "auto",
      borderColor: "#db0f62",
      borderRadius: 10,
      borderWidth: 0,
      borderStyle: "solid",
    },
    signinButton: {
      position: "relative",
      width: "20%",
      height: 40,
      backgroundColor: "#db0f62",
      color: "white",
      borderRadius: 5,
      marginBottom: 20,
    },
  };
  let formRef = useRef();
  let [isSuccess, setIsSuccess] = useState(false);
  let [isError, setIsError] = useState(false);
  const [inputs, setInputs] = useState({
    aadharno: "",
    name: "",
    mobno: "",
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (evnt) => {
    let paramName = evnt.target.name;
    let paramValue = evnt.target.value;
    console.log(paramName);
    console.log(paramValue);
    setInputs((values) => ({ ...values, [paramName]: paramValue }));
  };

  const handleSubmit = (evnt) => {
    try {
      // stop the default form handler
      evnt.preventDefault();
      evnt.stopPropagation();

      // vlidation logic
      formRef.current.classList.add("was-validated");
      if (!formRef.current.checkValidity()) {
        return;
      }

      //evnt.preventDefault();
      // alert(JSON.stringify(inputs));

      axios
        .post("http://localhost:8080/visitor/register.paradise", inputs)
        .then((response) => {
          //alert(response.data);
          setInputs({
            aadharno: "",
            name: "",
            mobno: "",
            email: "",
            username: "",
            password: "",
          });
          setIsSuccess(true);
          setTimeout(() => setIsSuccess(false), 2500);

          formRef.current.classList.remove("was-validated");
        })
        .catch((error) => {
          alert(error);
        });
    } catch (e) {
      setIsError(true);
      setTimeout(() => setIsError(false), 2500);
    }
  };

  return (
    <div>
      <Navbar title="SignUp" />
      <div className="vh-100 d-flex">
        <form ref={formRef} className="col-md-6">
          <div className="container">
            <div className="col-md-6">
              <h2 style={{ marginLeft: 600, marginTop: 5, marginBottom: 20 }}>
                SignUp_Here
              </h2>
              {/* <label className="form-label" style={{ marginLeft: 550 }}>Aadhar_Number: </label> */}
              <input
                type="text"
                name="aadharno"
                value={inputs.aadharno}
                onChange={handleChange}
                className="form-control"
                placeholder="AadharNumber"
                style={{ marginBottom: 10, marginLeft: 550 }}
                minLength="12"
                maxLength={"12"}
                required
              />
              <div style={{ marginLeft: 550 }} className="valid-feedback">
                AadharNo is OK ✅
              </div>
              <div style={{ marginLeft: 550 }} className="invalid-feedback">
                AadharNo Must be in 12 Digit ❌
              </div>
            </div>
            <div className="col-md-6">
              {/* <label className="form-label" style={{ marginLeft: 550 }}>Name: </label> */}
              <input
                type="text"
                name="name"
                value={inputs.name}
                onChange={handleChange}
                className="form-control"
                placeholder="Name"
                style={{ marginBottom: 10, marginLeft: 550 }}
                minLength="3"
                required
              />
              <div style={{ marginLeft: 550 }} className="valid-feedback">
                Name is OK ✅
              </div>
              <div style={{ marginLeft: 550 }} className="invalid-feedback">
                Name Must Have 3 Characters ❌
              </div>
            </div>
            <div className="col-md-6">
              {/* <label style={{ marginLeft: 550 }} className="form-label">Mobile_Number: </label> */}
              <input
                type="text"
                name="mobno"
                value={inputs.mobno}
                onChange={handleChange}
                className="form-control"
                placeholder="Mobile Number"
                style={{ marginBottom: 10, marginLeft: 550 }}
                minLength="10"
                maxLength={"10"}
                required
              />
              <div style={{ marginLeft: 550 }} className="valid-feedback">
                Mobile is OK ✅
              </div>
              <div style={{ marginLeft: 550 }} className="invalid-feedback">
                Mobile Must be 10 Digit ❌
              </div>
            </div>
            <div className="col-md-6">
              {/* <label style={{ marginLeft: 550 }} className="form-label">Email: </label> */}
              <input
                type="email"
                name="email"
                value={inputs.email}
                onChange={handleChange}
                className="form-control"
                placeholder="Eamil Id"
                style={{ marginBottom: 10, marginLeft: 550 }}
                pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}"
                required
              />
              <div style={{ marginLeft: 550 }} className="valid-feedback">
                Email is OK ✅
              </div>
              <div style={{ marginLeft: 550 }} className="invalid-feedback">
                Email is Invalid ❌
              </div>
            </div>
            <div className="col-md-6">
              {/* <label style={{ marginLeft: 550 }} className="form-label">Username: </label> */}
              <input
                type="text"
                name="username"
                value={inputs.username}
                onChange={handleChange}
                placeholder="UserName"
                style={{ marginBottom: 10, marginLeft: 550 }}
                className="form-control"
                minLength="4"
                required
              />
              <div style={{ marginLeft: 550 }} className="valid-feedback">
                Username is OK ✅
              </div>
              <div style={{ marginLeft: 550 }} className="invalid-feedback">
                Username Must Have 4 Characters 👎
              </div>
            </div>
            <div className="col-md-6">
              {/* <label style={{ marginLeft: 550 }} className="form-label">Password: </label> */}
              <input
                type="password"
                name="password"
                value={inputs.password}
                onChange={handleChange}
                className="form-control"
                placeholder="Password"
                style={{ marginBottom: 10, marginLeft: 550 }}
                minLength="8"
                required
              />{" "}
              <div style={{ marginLeft: 550 }} className="valid-feedback">
                Password is OK ✅
              </div>
              <div style={{ marginLeft: 550 }} className="invalid-feedback">
                Password Must Contain 8 Characters❌
              </div>
            </div>{" "}
            <div
              className="col-6 mt-10"
              style={{ marginTop: 20, marginLeft: 550 }}>
              {" "}
              <button
                type="submit"
                className="btn btn-primary btn-lg active"
                onClick={handleSubmit}>
                Sign Up
              </button>
              <div className="float-end">
                Existing User: <Link to="/signin">SignIn Here</Link>
              </div>
              {isSuccess && (
                <div
                  style={{ marginLeft: 500 }}
                  className="alert alert-success">
                  Operation Successfully
                </div>
              )}
              {isError && (
                <div style={{ marginLeft: 550 }} className="alert alert-danger">
                  Error Please Try After some time!
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

// import axios from "axios";
// import { useRef } from "react";
// import { useEffect, useState } from "react";
// import { useNavigate, useSearchParams } from "react-router-dom";

// function SimpleForm() {
//   let formRef = useRef();
//   let navigate = useNavigate();
//   let [searchParams] = useSearchParams();
//   let isedit = searchParams.get("edit");
//   let editId = searchParams.get("id");

//   let [isSuccess, setIsSuccess] = useState(false);
//   let [isError, setIsError] = useState(false);
//   let [user, setUser] = useState({
//     username: "",
//     password: "",
//     email: "",
//     mobile: "",
//   });

//   useEffect(() => {
//     getUserById();
//   }, []);

//   const getUserById = async () => {
//     const url = `http://localhost:8080/user/${editId}`;
//     const response = await axios.get(url);

//     console.log(response.data);
//     setUser(response.data);
//   };

//   const inputChangeHandler = (e) => {
//     const newUser = { ...user, [e.target.name]: e.target.value };
//     setUser(newUser);
//   };

//   const go2simplelist = () => {
//     navigate("/simplelist");
//   };

//   const createNewUser = async (e) => {
//     try {
//       // stop the default form handler
//       e.preventDefault();
//       e.stopPropagation();

//       // vlidation logic
//       formRef.current.classList.add("was-validated");
//       if (!formRef.current.checkValidity()) {
//         return;
//       }

//       // ALL GOOD THEN BELOW STTMENT WILL BE EXECUTED
//       console.log(user);
//       const url = "http://localhost:8080/user/";
//       await axios.post(url, user);

//       setUser({ username: "", password: "", email: "", mobile: "" });
//       setIsSuccess(true);
//       setTimeout(() => setIsSuccess(false), 2500);

//       formRef.current.classList.remove("was-validated");
//     } catch (e) {
//       setIsError(true);
//       setTimeout(() => setIsError(false), 2500);
//     }
//   };

//   const updateUser = async (e) => {
//     try {
//       // stop the default form handler
//       e.preventDefault();
//       e.stopPropagation();

//       // vlidation logic
//       formRef.current.classList.add("was-validated");
//       if (!formRef.current.checkValidity()) {
//         return;
//       }

//       const url = `http://localhost:8080/user/${editId}`;
//       await axios.put(url, user);

//       setUser({ username: "", password: "", email: "", mobile: "" });
//       setIsSuccess(true);
//       setTimeout(() => setIsSuccess(false), 2500);

//       formRef.current.classList.remove("was-validated");
//     } catch (e) {
//       setIsError(true);
//       setTimeout(() => setIsError(false), 2500);
//     }
//   };

//   return (
//     <div>
//       <div className="alert alert-light h1 m-0">Basic Form {editId}</div>

//       <form ref={formRef} className="needs-validation" novalidate>
//         <div className="mb-2">
//           <input
//             className="form-control form-control-lg"
//             type="text"
//             placeholder="Enter Username"
//             name="username"
//             value={user.username}
//             onChange={inputChangeHandler}
//             minLength="3"
//             required
//           />
//           <div className="valid-feedback">Username is OK ✅</div>
//           <div className="invalid-feedback">Username is Invalid 👎</div>
//         </div>

//         <div className="mb-2">
//           <input
//             className="form-control form-control-lg"
//             type="password"
//             placeholder="Enter Password"
//             name="password"
//             value={user.password}
//             onChange={inputChangeHandler}
//             minLength="8"
//             required
//           />
//           <div className="valid-feedback">Password is OK ✅</div>
//           <div className="invalid-feedback">Password is Invalid ❌</div>
//         </div>

//         <div className="mb-2">
//           <input
//             className="form-control form-control-lg "
//             type="email"
//             placeholder="Enter Email"
//             name="email"
//             value={user.email}
//             onChange={inputChangeHandler}
//             pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}"
//             required
//           />
//           <div className="valid-feedback">Email is OK ✅</div>
//           <div className="invalid-feedback">Email is Invalid ❌</div>
//         </div>

//         <div className="mb-2">
//           <input
//             className="form-control form-control-lg"
//             type="text"
//             placeholder="Enter Mobile"
//             name="mobile"
//             value={user.mobile}
//             onChange={inputChangeHandler}
//             minLength="10"
//             maxLength="10"
//             required
//           />
//           <div className="valid-feedback">Mobile is OK ✅</div>
//           <div className="invalid-feedback">Mobile is Invalid ❌</div>
//         </div>

//         {isedit ? (
//           <input
//             className="btn btn-lg btn-outline-success w-100"
//             type="button"
//             value="Update"
//             onClick={updateUser}
//           />
//         ) : (
//           <input
//             className="btn btn-lg btn-outline-success w-100"
//             type="button"
//             value="Submit"
//             onClick={createNewUser}
//           />
//         )}

//         {isSuccess && (
//           <div className="alert alert-success">Operation Successfully</div>
//         )}

//         {isError && (
//           <div className="alert alert-danger">
//             Error Please Try After some time!
//           </div>
//         )}
//       </form>
//     </div>
//   );
// }

// export default SimpleForm;
// Footer
