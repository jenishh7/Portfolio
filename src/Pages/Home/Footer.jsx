import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer--container">
      <div className="footer--link--container">
        <div className="footer--contact">
          <div className="footer--contact--details">
            <FaPhone className="footer--icon" />
            <span className="footer--contact--text">+91 6351320744</span>
          </div>
          <div className="footer--contact--details">
            <FaEnvelope className="footer--icon" />
            <span className="footer--contact--text">
              jenishbhilavala@gmail.com
            </span>
          </div>
          <div className="footer--contact--details">
            <FaMapMarkerAlt className="footer--icon" />
            <span className="footer--contact--text">Ahmedabad</span>
          </div>
        </div>
        <div className="footer--social--icon">
          <ul>
            <li>
              <a
                href="https://www.facebook.com/jenish.bhilavala/"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/jenishh_7/"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jenishbhilavala/"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="divider" />
      <div className="footer--content--container">
        <p className="footer--content">© 2024 All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
