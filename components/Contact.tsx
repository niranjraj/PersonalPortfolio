import React, { useState } from "react";
import Link from "next/link";
import SvgComponent from "./SvgComponent";

const mailInfo = {
  id: "niranjrajesh7007@gmail.com",
  subject: "Project or Enquiry",
};
const Contact = () => {
  return (
    <section className="contact-container" data-scroll-section>
      <div className="contact-footer-section">
        <div className="intro-subtitle">Contact.</div>
        <h1 className="contact-title">Let's work together</h1>
        <div className="contact-wrapper">
          <div className="social-item">
            <h3>Social</h3>
            <ul className="social-list">
              <li>
                <Link href="">
                  <a>Github</a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a>LinkedIn</a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a>Instagram</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="contact-header">
            <p>
              <span className="row">
                Have a project in mind? Would you like
              </span>
              <span className="row">to share it? Feel free to reach out</span>
              <span className="row">by writing an e-mail.</span>
            </p>
            <div>
              <Link href={`mailto:${mailInfo.id}?subject=${mailInfo.subject}`}>
                <a className="btn-connect">
                  <span>Connect</span>
                  <span>
                    <SvgComponent />
                  </span>
                </a>
              </Link>
            </div>
            <div className="credit">
              <p>
                <span className="row">
                  Designed and developed by Niranj Rajesh.
                </span>
                <span className="row">© 2022 All rights reserved.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-wrapper"></div>
    </section>
  );
};

export default Contact;
