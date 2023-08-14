import React from "react";
import "./Homepage.css";

import Bakor from "../assets/Bakor.jpg";
import BeytDwarka from "../assets/BeytDwarka.jpg";
import Jaisalmer from "../assets/Jaisalmer.jpg";
import Kutch from "../assets/Kutch.jpg";
import PoloForest from "../assets/PoloForest.jpg";
import Manali2 from "../assets/Manali2.jpg";
import Saputara from "../assets/Saputara.jpg";
import MagicalMaharashtra from "../assets/MagicalMaharashtra.jpg";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";

export default function Homepage() {
  var item = JSON.parse(localStorage.getItem("key"));

  return (
    <>
      <Navbar />
      <video width="100%" height="100%" autoPlay loop muted z-index="-1">
        <source src={require("../assets/bg.mp4")} type="video/mp4" />
      </video>
      {/* <div
        className="row justify-content-center align-items-center"
        style={{ height: "300px" }}
      >
        
      </div> */}
      <div
        className="row justify-content-center align-items-center"
        style={{ height: "300px" }}>
        <div
          className="col-11 col-md-10 h3"
          style={{ fontFamily: "cursive", textAlign: "center" }}>
          <h1>Welcome To Traveller's Paradise</h1>
        </div>
        <div
          className="col-11 col-md-10 h3"
          style={{ fontFamily: "cursive", textAlign: "center" }}>
          Traveler' paradise is a cult of overcoming fears and following the
          passion and most importantly,the dream. After leading thousand of
          trekkers sucessfully to the most renowned summits and through jow
          dropping passes,our aim is to provide every travel lover the means to
          scale the exploration.
        </div>
      </div>

      <div className="row" style={{ marginBottem: 12 }}>
        <div
          className="col-12 col-md-11 h2"
          style={{ fontFamily: "cursive", textAlign: "center" }}>
          <h1> Events </h1>
        </div>
        <div></div>

        <div className="col-12 col-md-4">
          <div className="card">
            <img
              src={Manali2}
              className="card-img-top"
              style={{ height: "400px", objectFit: "cover" }}
              alt=""
            />
            <div className="card-body">
              <h5
                className="card-title"
                style={{
                  fontFamily: "Comic Sans MS",
                  fontweight: 700,
                  fontSize: 40,
                }}>
                Manali
              </h5>
              <p>
                There are a plenty of shops that sell tourist map of Manali. If
                Himachal were the queen of all hill stations, Manali would
                undoubtedly have been its tiara. Rent a bike in Manali. Both
                cruiser bikes like Bullet and sport bikes from Honda, Bajaj,
                Yamaha etc are easily available. Exploring Manali on a motor
                bike with the pleasant climate of Manali.
              </p>

              {/* <a href="/ShowCart"  className="btn btn-primary"> */}

              <Link
                to="/Booking"
                state={{
                  eventName: "Manali Event",
                }}>
                <div style={{ marginTop: 12 }} className="btn btn-primary">
                  Book Now
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card">
            <img
              src={Bakor}
              className="card-img-top"
              style={{ height: "400px", objectFit: "cover" }}
              alt=""
            />
            <div className="card-body">
              <h5
                className="card-title"
                style={{
                  fontFamily: "Comic Sans MS",
                  fontweight: 700,
                  fontSize: 40,
                }}>
                Bakor
              </h5>
              <p>
                Bakor is a small village in Mahisagar District of Eastern
                Gujarat. This rolling country side with the Aravalli Hills
                dotting the horizon is blessed with good forest, bird life and
                tribal culture. It is an ideal location for experiencing the
                great outdoors. The forest of Bakor is home to a number of
                animals such as Nilgai, Chinkara, Hyena and Jackal.
              </p>

              <Link
                to="/Booking"
                state={{
                  eventName: "Bakor Event",
                }}>
                <div style={{ marginTop: 12 }} className="btn btn-primary">
                  Book Now
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card">
            <img
              src={BeytDwarka}
              className="card-img-top"
              style={{ height: "400px", objectFit: "cover" }}
              alt=""
            />
            <div className="card-body">
              <h5
                className="card-title"
                style={{
                  fontFamily: "Comic Sans MS",
                  fontweight: 700,
                  fontSize: 40,
                }}>
                BeytDwarka
              </h5>
              <p>
                A small island off the coast of Dwarka and accessed via Okha is
                home to the namesake temple, and supposedly the residence of
                Lord Krishna when he arrived here. The establishment of the
                temple is credited to Guru Vallabhacharya. Apart from the main
                temple, others in the complex commemorate Hanuman, Vishnu,
                Shiva, Lakshmi Narayan, Jambavati, Devi and others.
              </p>

              <Link
                to="/Booking"
                state={{
                  eventName: "BeytDwarka Event",
                }}>
                <div style={{ marginTop: 12 }} className="btn btn-primary">
                  Book Now
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="col-12 col-md-11 h2"
          style={{ fontFamily: "cursive", textAlign: "center" }}>
          <h1> Our Recommended </h1>
        </div>
        <div></div>
        <div className="col-12 col-md-4">
          <div className="card">
            <img
              src={Jaisalmer}
              className="card-img-top"
              style={{ height: "400px", objectFit: "cover" }}
              alt=""
            />
            <div className="card-body">
              <h5
                className="card-title"
                style={{
                  fontFamily: "Comic Sans MS",
                  fontweight: 700,
                  fontSize: 40,
                }}>
                Jaisalmer
              </h5>
              <p>
                Jaisalmer is a prominent tourist spot located in the
                northwestern state of Rajasthan in India. It is known as the
                'golden city' due to its golden dunes and castles clad in golden
                honey sandstone. Jaisalmer is adorned with lakes, ornate Jain
                temples and havelis. Climb onto the camel saddle and make your
                way through this desert to camp under the starry night sky for
                an unforgettable experience.
              </p>

              <Link
                to="/Booking"
                state={{
                  eventName: "Jaisalmer Event",
                }}>
                <div style={{ marginTop: 12 }} className="btn btn-primary">
                  Book Now
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card">
            <img
              src={Kutch}
              className="card-img-top"
              style={{ height: "400px", objectFit: "cover" }}
              alt=""
            />
            <div className="card-body">
              <h5
                className="card-title"
                style={{
                  fontFamily: "Comic Sans MS",
                  fontweight: 700,
                  fontSize: 40,
                }}>
                Kutch
              </h5>
              <p>
                Kutch Mahotsav or the great Kutch festival is organized during
                December - January every year near the days when Shivratri is
                celebrated in Gujarat. It offers access to the interior and
                beautiful recesses of the desert district. Colorfully attired
                dancers, music concerts, Sindhi Bhajan performances, Langa
                Desert Music and shops selling traditional Kutchi embroideries
                and jewelry are to be enjoyed.
              </p>
              <Link
                to="/Booking"
                state={{
                  eventName: "Kutch Event",
                }}>
                <div style={{ marginTop: 12 }} className="btn btn-primary">
                  Book Now
                </div>
              </Link>{" "}
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card">
            <img
              src={PoloForest}
              className="card-img-top"
              style={{ height: "400px", objectFit: "cover" }}
              alt=""
            />
            <div className="card-body">
              <h5
                className="card-title"
                style={{
                  fontFamily: "Comic Sans MS",
                  fontweight: 700,
                  fontSize: 40,
                }}>
                PoloForest
              </h5>
              <p>
                Tucked away in a forest, there are secrets to be revealed. An
                ancient city, a gateway to Rajasthan. A hiding place for rulers,
                concealed from enemies, citizens, angry wives, even from the
                sun, tucked between sacred hills on the east and west. And the
                mystery of abandonment, decay. Ancient temples, some still
                performing their pujas deep within this dense jungle, is itself
                the larger temple, and the trees themselves are the Gods.
              </p>

              <Link
                to="/Booking"
                state={{
                  eventName: "PoloForest Event",
                }}>
                <div style={{ marginTop: 12 }} className="btn btn-primary">
                  Book Now
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div
          className="col-12 col-md-11 h2"
          style={{ fontFamily: "cursive", textAlign: "center" }}>
          <h1>Our Camps</h1>
        </div>

        <div></div>

        <div className="col-12 col-md-4">
          <div className="card">
            <img
              src={Saputara}
              className="card-img-top"
              style={{ height: "400px", objectFit: "cover" }}
              alt=""
            />
            <div className="card-body">
              <h5
                className="card-title"
                style={{
                  fontFamily: "Comic Sans MS",
                  fontweight: 700,
                  fontSize: 40,
                }}>
                Saputara
              </h5>
              <p>
                Saputara is a hill town in the west Indian state of Gujarat. The
                Artist Village cultural center displays, and sells, tribal arts
                and crafts. Artifacts, including ritual objects, trace the
                heritage of the local Dang tribe at Saputara Tribal Museum.
                Green spaces with picnic spots include the Step Garden and the
                Lake Garden, set on Lake Saputara. Governor’s Hill Trail offers
                views of the surrounding rivers and valleys.
              </p>
              <div></div>

              <Link
                to="/Booking"
                state={{
                  eventName: "Saputara Camp",
                }}>
                <div style={{ marginTop: 12 }} className="btn btn-primary">
                  Book Now
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card">
            <img
              src={MagicalMaharashtra}
              className="card-img-top"
              style={{ height: "400px", objectFit: "cover" }}
              alt=""
            />
            <div className="card-body">
              <h5
                className="card-title"
                style={{
                  fontFamily: "Comic Sans MS",
                  fontweight: 700,
                  fontSize: 40,
                }}>
                MagicalMaharashtra
              </h5>
              <p>
                One destination which offers up an excellent cross-section of
                attractions is magical Maharashtra, India’s second most populous
                state. Whether arriving via a convenient Delhi to Mumbai flight
                or making your way overland as we did from Madya Pradesh, the
                region’s highlights are easily combined into an adventurous
                circuit which should satisfy even the most jaded travelers
                (including yours truly).
              </p>

              <Link
                to="/Booking"
                state={{
                  eventName: "MagicalMaharashtra Camp",
                }}>
                <div style={{ marginTop: 12 }} className="btn btn-primary">
                  Book Now
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card">
            <img
              src={
                "https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=600"
              }
              className="card-img-top"
              style={{ height: "400px", objectFit: "cover" }}
              alt=""
            />
            <div className="card-body">
              <h5
                className="card-title"
                style={{
                  fontFamily: "Comic Sans MS",
                  fontweight: 700,
                  fontSize: 40,
                }}>
                Sahyadri
              </h5>
              <p>
                Sahyadri is home to some amazing Rocky Mountains and pinnacles,
                historic hill forts, steep canyons, and some massive rock faces.
                These areas offer a variety of climbing opportunities such as
                technical scrambling, pinnacle climbing, and rock face climbing,
                as well as few bouldering opportunities too. It has been
                declared as a UNESCO World Heritage Site for its biological
                diversity.
              </p>

              <Link
                to="/Booking"
                state={{
                  eventName: "Sahyadri Camp",
                }}>
                <div style={{ marginTop: 12 }} className="btn btn-primary">
                  Book Now
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
