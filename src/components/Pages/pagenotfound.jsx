import Notfound from "../../assets/notfound.json";
import "../../styles/notfound.css";
import React, { Component } from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
class Animation extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: Notfound,
    };

    return (
      <div className="not ">
        <div>
          <h1>Pagina no encontrada</h1>
          <Lottie options={defaultOptions} />
          <h3 className="text-notfound">
            Ir a casa :{" "}
            <Link to="/" className="stylenone container-animation ">
              <button class="btn-grad">Aqui</button>
            </Link>{" "}
          </h3>
        </div>
      </div>
    );
  }
}

export default Animation;
