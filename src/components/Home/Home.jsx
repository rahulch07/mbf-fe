import React from "react";
import "./home.css";
import logisticsImg from "/logistics1.jpg";
import senior from "/senior.jpeg";

export default function Home() {
  return (
    <>
      <div style={{ backgroundColor: "whitesmoke" }}>
        <div
          className="bg-img"
          //   style={{ backgroundImage: `url(${logisticsImg})` }}
        >
          <img
            src={logisticsImg}
            className="img-fluid"
            style={{ objectFit: "fill" }}
          />
          <div className="moto">
            <p className="big-font">MBF LOGISTICS PVT. LTD.</p>
            <p className="normal-font">
              we provide logistics and site closure support to our customers for
              PAN India locations.
            </p>
            <ul className="normal-font">
              <li>Strong Network.</li>
              <li>Faster Connectivity.</li>
              <li>Trusted Resources.</li>
            </ul>
          </div>
        </div>
        <div className="services-box">
          <div id="services" className="feature-list">
            <p className="big-font" style={{ marginBottom: 0 }}>
              Our Services:
            </p>
            <div>
              <div className="row">
                <div className="col-md-4 normal-font">
                  <p className="service-card">
                    ATM & Assets packing & Movements.
                  </p>
                </div>
                <div className="col-md-4 normal-font">
                  <p className="service-card">Site Closure support.</p>
                </div>
                <div className="col-md-4 normal-font">
                  <p className="service-card">
                    ATM & Assets scrapping services.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 normal-font">
                  <p className="service-card">Inventory Management.</p>
                </div>
                <div className="col-md-4 normal-font">
                  <p className="service-card">TIS Support.</p>
                </div>
                <div className="col-md-4 normal-font">
                  <p className="service-card">Warehouse support.</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 normal-font">
                  <p className="service-card">
                    ATM painting/Color customization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="client-list-box">
          <div className="big-font">Our clients:</div>
          <div className="client-list">
            <div className="row client-row">
              <div className="col" style={{ alignItems: "center" }}>
                <img src={senior} alt="logo"></img>
                <p>Senior Solutions</p>
              </div>
            </div>
          </div>
        </div>
        <div id="contactUs" className="contact-details">
          <div className="contact-card">
            <p className="big-font">Contact Us</p>
            <div className="contact info">
              <div className="emailAndNumber">
                <div className="email">
                  <p className="normal-font">Emails:</p>
                  <p className="small-font">helpdesk@mbflogistics.co.in</p>
                  <p className="small-font">admin@mbflogistics.co.in</p>
                </div>
                <div className="number">
                  <p className="normal-font">Ph numbers:</p>
                  <p className="small-font">Helpdesk: +91 8928260095</p>
                  <p className="small-font">Sunita S: +91 8108484723</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
