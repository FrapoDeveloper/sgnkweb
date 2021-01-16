import Axios from "axios";
import React, { Component } from "react";
import Titanescontainer from "../Organisms/titanescontainer";
import "../../styles/characters.css";

class Titanes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titanes: [],
    };
  }

  componentDidMount() {
    Axios.get(
      "https://my-json-server.typicode.com/FrapoDeveloper/titans-db/titanes"
    ).then((response) => {
      //resolvemos la promesa
      this.setState({
        titanes: response.data,
      });
    });
  }

  render() {
    const { titanes } = this.state; //destructuracion de objetos
    return <Titanescontainer titanes={titanes} />;
  }
}
export default Titanes;
