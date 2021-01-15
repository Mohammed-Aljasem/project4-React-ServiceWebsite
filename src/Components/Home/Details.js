 import React from 'react';
 import '../../Styles/Details.css';

class Details extends React.Component {
  render() {
    return(
        <div className="details">
          <div>
            <div className="detimg">
          <img src={this.props.img} height="100%" />
            </div>
          <div className="details-body">
            <h2>{this.props.title}</h2>
          </div>
          </div>     
               
        </div>
        
    )
  }
}


export default Details ;
