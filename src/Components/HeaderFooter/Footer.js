import React from "react";
import "../../Styles/footer.css";
export default function Footer() {
  return (
    <footer>
      <div className="main-content">
        <div className="left box">
          <h2>About us</h2>
          <div className="content">
            <p>
              Key 2 Drive is a website that offers online booking service, our
              main goal is make the booking drive lessons process much easier
              for the people, which will effect on the community by reducing the
              regular time when the people used to go to driving school and
              check the available dates, people can book driving lessons for
              many vehicles such as scooters, motorcycles, manual cars,
              automatic cars, trucks etc...
            </p>
            <div className="social">
              <a href="https://facebook.com">
                <span className="fab fa-facebook-f foot"></span>
              </a>
              <a href="https://twitter.com">
                <span className="fab fa-twitter foot"></span>
              </a>
              <a href="https://instagram.com">
                <span className="fab fa-instagram foot"></span>
              </a>
              <a href="https://youtube.com">
                <span className="fab fa-youtube foot"></span>
              </a>
            </div>
          </div>
        </div>
        <div className="center box">
          <h2>Address</h2>
          <div className="content">
            <div className="icon-footer">
              <i className="fas fa-map-marker-alt"></i>
              <span className="text">Hashemite Kingdom of Jordan, Amman</span>
            </div>
            <div className="icon-footer">
              <i className="fas fa-phone-alt"></i>
              <span className="text">0777777777</span>
            </div>
            <div className="icon-footer">
              <i className="fas fa-envelope"></i>
              <span className="text">info@key2drive.com</span>
            </div>
          </div>
        </div>
        <div className="right box">
          <h2>Contact us</h2>
          <div className="content">
            <form action="#">
              <div>
                <div className="text">Email *</div>
                <input type="email" required />
              </div>
              <div>
                <div className="text">Message *</div>
                <input type="text" required />
                <br />
                <button className="btn-footer" type="submit">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="bottom">
        <center>
          <p>Created By KEY 2 DRIVE | &copy; 2020 All rights reserved.</p>
        </center>
      </div>
    </footer>
  );
}