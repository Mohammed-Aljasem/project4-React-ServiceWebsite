import React from "react";
import Header from "../HeaderFooter/Header";
import Footer from "../HeaderFooter/Footer";
import Cart from "./Cart";
import DataCard from "../Services/Datacard";
const BookingApp = ({ match }) => {
  // console.log(match.params.id);
  const bookData = DataCard.find((x) => x.id === match.params.id);
  // console.log(bookData);
  return (
    <div>
      <Header />
      <div className="cart">
        <h2 className="title">Your chosen driving lesson</h2>
        <div className="service">
          <h2 className="heading__cart">{bookData.maintext}</h2>
          <p className="subText__booking">{bookData.subtext}</p>
        </div>
        <Cart a={bookData} />
      </div>
      <Footer />
    </div>
  );
};
export default BookingApp;