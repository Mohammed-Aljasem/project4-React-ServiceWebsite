import React from "react";
import "../../Styles/Cart.css";
import Popup from "reactjs-popup";
import Booking from "./Booking";

const BookingApp = (a) => {
  const newArry = JSON.parse(localStorage.getItem("Booked"));

  if (newArry !== null) {
    newArry.push(a);
    localStorage.setItem("Booked", JSON.stringify(newArry));
  } else {
    localStorage.setItem("Booked", JSON.stringify([a]));
  }
};

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confirm: true,
    };
  }
  handleFormSubmit = (e) => {
    e.preventDefault();
    this.setState({ confirm: false });
    window.location = "/profile";
  };
  handleFormssSubmit = () => {
    BookingApp(this.props.a);
    console.log("test");
  };
  render() {
    return (
      <div>
        <div className="testbox">
          <form
            className="cart__form"
            action="/"
            onSubmit={this.handleFormSubmit}
          >
            <div className="banner">
              <h1>Book your driving lessons</h1>
            </div>
            <hr />
            <fieldset>
              <legend
                style={{
                  color: "#3D5A80",
                  textDecoration: " underline overline",
                }}
              >
                Booking Information
              </legend>
              <div className="item">
                <label htmlFor="name">
                  Days Available<span>*</span>
                </label>
                <input id="name" type="text" name="text" required />
              </div>
              <div className="item">
                <label htmlFor="time">
                  Times and Location Available<span>*</span>
                </label>
                <input
                  id="time"
                  type="text"
                  name="text"
                  placeholder="Time Available"
                  required
                />
              </div>
              <div className="item">
                <div className="name-item">
                  <div>
                    <input
                      type="text"
                      name="code"
                      placeholder="ZIP Code"
                      required
                    />
                  </div>
                  <div className="select__cart">
                    <select>
                      <option selected value disabled>
                        City
                      </option>
                      <option value={1}>Amman</option>
                      <option value={2}>Al Salt</option>
                      <option value={3}>Irbid</option>
                      <option value={4}>Jarsh</option>
                      <option value={5}>Al Aqaba</option>
                      <option value={6}>Al Zarqa'a</option>
                      <option value={7}>Ma'an</option>
                    </select>
                  </div>
                </div>
              </div>
            </fieldset>
            <br />
            <fieldset>
              <legend
                style={{
                  color: "#3D5A80",
                  textDecoration: " underline overline",
                }}
              >
                Customer Information
              </legend>
              <div className="item">
                <label htmlFor="name">
                  Name<span>*</span>
                </label>
                <div className="name-item">
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="First"
                    required
                  />
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Last"
                    required
                  />
                </div>
              </div>
              <div className="item">
                <label htmlFor="bdate">
                  Date of Birth<span>*</span>
                </label>
                <input id="bdate" type="date" name="bdate" required />
                <i className="fas fa-calendar-alt date" />
              </div>
              <div className="item">
                <label htmlFor="phone">
                  Phone Number<span>*</span>
                </label>
                <input id="phone" type="tel" name="phone" required />
              </div>
              <div className="item">
                <label htmlFor="position">
                  Address<span>*</span>
                </label>
                <input id="position" type="text" name="text" required />
              </div>
              <label className="radio__cart">
                Cash
                <input type="radio" name="radio" />
                <span className="checkmark" />
              </label>
              <label className="radio__cart">
                Visa Card
                <input type="radio" name="radio" required />
                <Popup
                  trigger={<span className="checkmark" />}
                  position="right center"
                >
                  <Booking />
                </Popup>
              </label>
              <button
                type="submit"
                className="btn__cart"
                onClick={this.handleFormssSubmit}
              >
                BOOK NOW
              </button>
            </fieldset>
          </form>
        </div>
        <div className={this.state.confirm ? "confirm" : "confirm block"}>
          Your Booking has been confirmed Thank you for trusting us!
        </div>
      </div>
    );
  }
}
export default Cart;
