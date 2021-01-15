import React from 'react'; 
import Slider from './Slider'
import '../../Styles/Scard.css';
import Scard1 from './Scard1.jpg'
import { Card } from '@material-ui/core';
import {Link} from 'react-router-dom'


function Scard(props) {
  return (
     <div className="cardcontainer">
          <div className="cardimg">
           <img className="cardimg" src={props.cardimg} alt=" "/>
          </div>
     ​
          <div className="textcontainer">
               <div className="maintext"> 
                    <h3>{props.maintext}</h3>
               </div>
               <div className="subtext">
                    <p>{props.subtext}</p>
               </div>
          </div>


          <Link  to={`/booking/${props.id}`}>
          <div className="button">
                    <div className="buttontext">Book Now</div>  
          </div>
          </Link>
          {/* <div className="color"> </div> */}
     ​
​
​
     </div>
   
  )
}
export default Scard;

