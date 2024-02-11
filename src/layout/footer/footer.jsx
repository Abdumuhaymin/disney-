import React from "react";
import "./footer.css";
import logo from "./footerLogo.svg";
export const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="container">
          <div className="footer__logoBox">
            <img src={logo} alt="logo" className="footer__logo" />
          </div>
          <div className="footer__block">
            <div className="selector__box">
              <select id="select">
                <option value="1" className="language">
                  Englsh
                </option>
              </select>
            </div>
            <a href="#" className="footer__link">
              Subscriber Agreement
            </a>
            <a href="#" className="footer__link">
              Privacy Policy
            </a>
            <a href="#" className="footer__link">
              Your California Privacy Rights
            </a>
            <a href="#" className="footer__link">
              Do Not Sell My Personal Information
            </a>
            <a href="#" className="footer__link">
              Children's Online Privacy Policy
            </a>
            <a href="#" className="footer__link">
              Closed Captioning
            </a>
            <a href="#" className="footer__link">
              Interest-Based Ads
            </a>
            <a href="#" className="footer__link">
              Supported Devices
            </a>
            <a href="#" className="footer__link">
              Help
            </a>
            <a href="#" className="footer__link">
              Gift Disney+
            </a>
            <a href="#" className="footer__link">
              About Us
            </a>
            <a href="#" className="footer__link">
              Disney+ Partner Program
            </a>
            <a href="#" className="footer__link">
              Disney Bundle
            </a>
          </div>
          <div className="footer__end">
            <p className="footer__text">
              Content and platform availability may vary by region.
            </p>
            <p className="footer__text end">© Disney. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};
