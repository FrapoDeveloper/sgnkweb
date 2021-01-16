import React, { Component } from "react";
import Lottie from "react-lottie";
import Loading from "../../assets/load2.json";
import "../../styles/style.css";
class Loader extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: Loading,
    };

    return (
      <div className="Uncontrolled">
        <Lottie options={defaultOptions} />
      </div>
    );
  }
}

export default Loader;
