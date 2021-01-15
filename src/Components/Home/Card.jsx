import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "../../Styles/Card.css";

class Card extends React.Component {
  render() {
    return (
      <div className="top-container">
        <div className="card">
          <div className="card-body">
            <div className="card-imag">
              <img src={this.props.img} alt="" className="profile-img" />
            </div>
            <h3>{this.props.name}</h3>
            <h3>{this.props.number}</h3>
            <h4>{this.props.lecture}</h4>
            <div className="icons">
              <a href={this.props.linkedinlink}>
                <FaLinkedin></FaLinkedin>
              </a>
              <a href={this.props.githublink}>
                <FaGithub></FaGithub>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Card;
