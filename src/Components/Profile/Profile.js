import React, { useState } from "react";

import "../../Styles/styleProfile.css";
import auth from "../Register/auth";
import Header from "../HeaderFooter/Header";
import Footer from "../HeaderFooter/Footer";
import WeatherH from "./WeatherH";
import ProfileServices from "./ProfileServices";
import { FaEdit } from "react-icons/fa";

function Profile(props) {
  let profileNameFirst = window.sessionStorage.getItem("firstName");
  let profileNameLast = window.sessionStorage.getItem("lastName");
  let profileEmail = window.sessionStorage.getItem("email");

  return (
    <div>
      <Header />
      <div className="container-profile-big">
        <div className="container-profile-ch">
          <div className="basic-information-pro">
            <div className="count-imag-pro">
              <div className="profile-image-count">
                <div className="button-edit-pro">
                  <button className="edit-image-pro">
                    <FaEdit />
                  </button>
                  <div className="profile-image">
                    <img src="./img/profile2.png" alt="" width="100%" height />
                  </div>
                </div>
              </div>
              <div className="information">
                <div className="profile-name">
                  <h3 style={{ textAlign: "left" }}>Profile name:</h3>
                  <h2 className="mm-1">
                    {profileNameFirst} {profileNameLast}
                  </h2>
                </div>
                <div className="profile-email">
                  <h3 style={{ textAlign: "left" }}>Your email:</h3>
                  <h2>{profileEmail}</h2>
                </div>
                <div className="profile-email">
                  <p className="mm-1">
                    {" "}
                    Note: Hello you are new user welcome in your profile we will
                    add more feature soon
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            className="button"
            onClick={() => {
              auth.logout(() => {
                props.history.push("/login");
              });
            }}
          >
            Logout
          </button>
          <div className="container-width">
            <h3 style={{ marginTop: "2rem", padding: "1rem" }}>
              Your booked services
            </h3>
          </div>

          <div className="container-width">
            <div className="bookedservicess">
              <ProfileServices />
            </div>
          </div>
          <div className="container-width">
            <div className="button-logout"></div>
          </div>
          <WeatherH />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
