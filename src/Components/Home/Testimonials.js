import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "../../Styles/Testimonials.css";
import {FaStar} from "react-icons/fa";

export default class Testimonials extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false} 
        autoPlay={true}
        interval={6100}
      >

        <div  className="testcontainer">
        <div className="pic">
          <img src="https://avatars2.githubusercontent.com/u/71763834?s=96&v=4" />
          </div>
          <div className="myCarousel">
            <h3>Waed Dawaghreh</h3>
            <p>
            It's freeing to be able to catch up on customized lessons and not be
              distracted 
            </p>
            <div className="FaStar">  
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            </div>
          </div>
        </div>

        <div  className="testcontainer">
        <div className="pic">
          <img src="https://avatars1.githubusercontent.com/u/71770261?s=96&v=4" />
         </div>
          <div className="myCarousel">
            <h3>Diaa Jamil</h3>
            <p>
              I enjoy catching up with Fetch on my laptop, or on my phone when
              I'm on the go!
            </p>
            <div className="FaStar">  
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            </div>

          </div>
        </div>

        
        <div  className="testcontainer">
        <div className="pic">
          <img src="https://avatars1.githubusercontent.com/u/71584331?s=96&v=4" />
          </div>
          <div className="myCarousel">
            <h3>Jenan Musallam</h3>
            <p>
              I can open the website and design my own lessons schadule.  thank you 
            </p>
            <div className="FaStar">  
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            </div>
          </div>
        </div>

        
        <div  className="testcontainer">
        <div className="pic">
          <img src="https://avatars1.githubusercontent.com/u/60710271?s=96&v=4" />
          </div>
          <div className="myCarousel">
            <h3>Dana Togouj</h3>
            <p>
               the simple design makes me feel comfortable 
            </p>
            <div className="FaStar">  
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            </div>
          </div>
        </div>

        
        <div className="testcontainer">
        <div className="pic">
          <img src="https://avatars2.githubusercontent.com/u/71732733?s=96&v=4" />
          </div>
          <div className="myCarousel">
            <h3>Anas Jawabreh</h3>
            <p>
             my friend take lessons with you, i hape if i could manage my time and join him
            </p>
            <div className="FaStar">  
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            </div>
          </div>
        </div>

        
      </Carousel>
    );
  }
}