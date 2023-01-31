import React, { Component } from "react";
import "./Banner.css";

class Banner extends Component {
  render() {
    return (
      <div className="bannerContainer">
        <h1 className="bannerText">{this.props.bannerText}</h1>
      </div>
    );
  }
}

export default Banner;
