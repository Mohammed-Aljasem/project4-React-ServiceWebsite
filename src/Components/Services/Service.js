import React from 'react'
import '../../Styles/Service.css'
import Slider from './Slider'
import Scard from './Scard'
import Datacard from './Datacard'



const Datac = Datacard.map (x=> <Scard id={x.id} maintext={x.maintext} subtext={x.subtext} cardimg={x.cardimg}/> )
function Service (){
    return(

    <div>
    <div className="slider-container-pr">
        <Slider/>
    </div>
<div className="flexcontainer">   
{Datac}
</div>
    </div>

)
}
export default Service;