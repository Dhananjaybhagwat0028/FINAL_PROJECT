import React from "react";



import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

function FooterPage() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <h2>Traveler's Paradise</h2>
          <div className="social">
            <FaFacebook className="icon" />
            <FaInstagram className="icon" />
            <FaTwitter className="icon" />
            <FaPinterest className="icon" />
            <FaYoutube className="icon" />
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <ul>
              <li>About</li>
              <li>Partnerships</li>
              <li>Careers</li>
              <li>Newsroom</li>
              <li>Advertising</li>
            </ul>
          </div>
          <div className="right">
            <ul>
              <li>Contact</li>
              <li>Terms</li>
              <li>Policy</li>
              <li>Privacy</li>
              <li>Pricing</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <hr></hr>
        <div style={{ textalgin: "centre" }}>
          <h6 class="text-white text-center mb-3 mt-3">
            © All COPYRIGHTS are Reserved by CDAC Mumbai, Mar-22 Team-43
          </h6>
        </div>
      </div>
    </div>
  );
}

export default FooterPage;
