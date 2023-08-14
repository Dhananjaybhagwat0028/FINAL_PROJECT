import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./components/Signin";
import Signup from "./components/Signup";
import FooterPage from "./components/FooterPage";
import Homepage from "./components/Homepage";
import VisitorList from "./components/VisitorList";
import AdminLogin from "./components/AdminLogin";
import VisitorUpdate from "./components/VisitorUpdate";
import EventList from "./components/EventList";
import EventAdd from "./components/EventAdd";
import EventUpdate from "./components/EventUpdate";
import Homepage2 from "./components/HomePage2";
import Review from "./components/Review";
import Profile from "./components/Profile";
import AboutUs from "./components/AboutUS";
import AdminNav from "./components/AdminNav";
import Abt2 from "./components/Abt2";
import R2 from "./components/R2";
import BShowCart from "./components/BShowCart";
import ShowPdf from "./components/ShowPdf";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>

          <Route path="/homepage2" element={<Homepage2 />}></Route>

          <Route path="/abt2" element={<Abt2 />}></Route>

          <Route path="/r2" element={<R2 />}></Route>

          <Route path="/profile" element={<Profile />}></Route>

          <Route path="/aboutus" element={<AboutUs />}></Route>

          <Route path="/Showcart" element={<BShowCart />}></Route>

          <Route path="/Booking" element={<BShowCart />}></Route>

          <Route path="/AdminLogin" element={<AdminLogin />}></Route>

          <Route path="List" element={<VisitorList />}></Route>

          <Route path="profile/update" element={<VisitorUpdate />}></Route>

          <Route path="list/eventlist" element={<EventList />}></Route>

          <Route path="eventAdd" element={<EventAdd />}></Route>

          <Route
            path="/list/eventlist/EventUpdate"
            element={<EventUpdate />}></Route>

          <Route path="review" element={<Review />}></Route>

          <Route path="/ShowPdf" element={<ShowPdf />}></Route>

          <Route path="/AdminNav" element={<AdminNav />}></Route>

          <Route path="/Signup" element={<Signup />}></Route>
          <Route path="/Signin" element={<SignIn />}></Route>
        </Routes>
      </BrowserRouter>
      <FooterPage />
    </div>
  );
}

export default App;
