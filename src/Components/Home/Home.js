import React from "react";
import "../../Styles/Home.css";
import Card from "./Card";
import Header from "../HeaderFooter/Header";
import Footer from "../HeaderFooter/Footer";
import Details from "./Details";
import Testimonials from "./Testimonials";
import MoreDeets from "./MoreDeets";
import YoutubeApi from "./YoutubeApi";
import "../../Styles/youtube.css";
import Special2 from "../../img/specil2.png";
const Home = () => {
  return (
    <React.StrictMode>
      <Header />
      ​
      <MoreDeets />​
      <div className="details__container">
        <Details
          img={Special2}
          title="With Key 2 Drive the drivers can learn how to drive and we guarantee the best service."
        />
        <Details
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZadOaweICxLPERvb5OMsQQpIUp1D1wGWx-A&usqp=CAU"
          title="Key 2 Drive Team are happily serve the special need customers. "
        />
        <Details
          img="https://www.miscw.com/wp-content/uploads/2016/02/drivers-license-test.png"
          title="We prepare you to  pass the test and too many vehicles are ready for you to start.  "
        />
      </div>
      ​ ​
      <div className="youtube-container">
        <YoutubeApi />
      </div>
      ​<h3 style={{ marginTop: "5rem" }}> Testimonials</h3>
      <Testimonials />
      <br />
      <br />
      <h3 style={{ marginTop: "5rem" }}> Our Team </h3>​
      <div className="flex-container">
        <Card
          img="https://avatars.githubusercontent.com/u/39887091?s=460&v=4"
          name="Abdullah alhajeid "
          number="0778870786"
          lecture="Scrum Master"
          linkedinlink="https://www.linkedin.com/in/abdallah-alhajeid/"
          githublink="https://github.com/Abdallah-Alhajeid"
        />
        <Card
          img="https://avatars1.githubusercontent.com/u/71769566?s=96&v=4"
          name="Hala Hyasat"
          number="0770530135"
          lecture="Product Owner"
          linkedinlink="https://www.linkedin.com/in/hala-alhyasat/"
          githublink="https://github.com/HalaHyasat"
        />
      </div>
      <div className="flex-container">
        <Card
          img="https://avatars1.githubusercontent.com/u/71770290?s=96&v=4"
          name="Heba Balbesee"
          number="0778982303"
          lecture="Developer"
          linkedinlink="https://www.linkedin.com/in/heba-bilbeisi/"
          githublink="https://github.com/HEBA-BILBEISI"
        />
        <Card
          img="https://avatars0.githubusercontent.com/u/71769638?s=96&v=4"
          name="Lubna Maaweed"
          number="0775327296"
          lecture="Developer"
          linkedinlink="https://www.linkedin.com/in/lubna-almaaweed/"
          githublink="https://github.com/lubna-almaaweed"
        />
        <Card
          img="https://avatars2.githubusercontent.com/u/71584041?s=96&v=4"
          name="Mohammad Aljasem"
          number="0778982286"
          lecture="Developer"
          linkedinlink="https://www.linkedin.com/in/mohammed-aljasem/"
          githublink="https://github.com/Mohammed-Aljasem"
        />
      </div>
      <Footer />
    </React.StrictMode>
  );
};

export default Home;
