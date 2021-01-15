import React from "react";
var myservices =[] ;
export default function ProfileServices() {
  const mydata = JSON.parse(localStorage.getItem("Booked"));

  if (mydata !== null){

  myservices = mydata.map( (x)=> <div>
  <div className="service">
    <h2 className="heading__cart">{x.maintext}</h2>
    <p className="subText__booking">
     {x.subtext}
    </p>
  </div>

 </div> )
  }

  return (
    <div>
    {myservices}

     </div>
  );
}
