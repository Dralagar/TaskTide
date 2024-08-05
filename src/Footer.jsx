import React from "react";
import "./styles/Footer.css"; // Ensure this path is correct
import twitterLogo from "./assets/twitter-logo x.avif";
import facebook from "./assets/Facebook_Logo_2023.png";
import instagram from "./assets/Instagram_icon.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>About Us</h3>
          <p>
            We are dedicated to helping you manage your tasks effectively and
            efficiently. Learn more about our mission and values on our About
            page.
          </p>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms-of-service">Terms of Service</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact Us</h3>
          <ul>
            <li>
              Email: <a href="mailto:info@tasktide.com">info@tasktide.com</a>
            </li>
            <li>
              Phone: <a href="tel:+1234567890">+254706255611</a>
            </li>
            <li>
              Address: Keekonyokie, Saitoti Road Apex View Estate, Kajiado,
              Kenya
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="social-media-icons">
            <a
              href="https://twitter.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitterLogo} alt="Twitter" />
            </a>
            <a
              href="https://facebook.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="Facebook" />
            </a>
            <a
              href="https://instagram.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your TaskTide. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
