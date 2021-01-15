import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import '../../Styles/Slider.css'
import Imge1 from '../../img/imge1.jpg'
import Imge2 from '../../img/imge2.jpg'

export default function service() {
    return (
        <div className="slider-container-pr">

             <Carousel className= "caurousel_width" >
                  <Carousel.Item className= "slider">
                    <img
                      className="d-block w-100  "
                      src= {Imge1}
                      alt="cars and motorcycles"
                    />
                    <Carousel.Caption>
                    <div className="text">
                      
                      <h3 className="stext">Keys 2 Drive</h3>
                      <p className="stext">Now with Keys 2 Drive you can book your driving lessons online ! </p>
                    </div>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item className="slider" >
                    <img
                      className="d-block w-100"
                      src= {Imge2}
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                    <div className="text">
                      
                      <h3 className="stext">0 Waste of time </h3>
                      <p className="stext">With Key 2 Drive you will not waste any time </p>
                      </div>
                    </Carousel.Caption>
                  </Carousel.Item>

              </Carousel>
          </div>
    )
}
