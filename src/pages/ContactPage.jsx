import React from "react";
import { Link } from "react-router-dom";
import Contact from "../components/Contact";
import HeroImage from "../assets/contact-hero.jpg";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css";

const ContactPage = () => {
  // ALABAMA
  const position = [33.5186, -86.8104];
  return (
    <div>
      <section
        className="pw-about-hero"
        style={{
          backgroundImage: `url(${HeroImage})`,
        }}
      >
        <div className="pw-about-hero-overlay"></div>

        <div className="pw-about-hero-content">
          <p className="pw-about-breadcrumb">
            <Link to="/">Home</Link> / Contact
          </p>
          <h1>Talk To Our Team</h1>
        </div>
      </section>
      <Contact />
      <section className="pw-contact-map-section">
        {/* INFO CARD */}
        <div className="pw-contact-map-card">
          <span>PrimeWears Headquarters</span>

          <h2>Alabama, United States</h2>

          <p>
            2101 4th Avenue North
            <br />
            Birmingham, AL 35203
            <br />
            United States
          </p>
        </div>

        {/* MAP */}
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={false}
          className="pw-contact-map"
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={position}>
            <Popup>PrimeWears Headquarters</Popup>
          </Marker>
        </MapContainer>
      </section>
    </div>
  );
};

export default ContactPage;
