import React, { Component } from "react";
import { w3cwebsocket } from "websocket";
const client = new w3cwebsocket("ws://localhost:55455");

class PylonConnector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latency: null,
    };
  }

  componentDidMount() {
    client.onmessage = (message) => {
      this.setState({
        latency: new Date().getTime() - message.data,
      });
    };
  }

  render() {
    return <span className="PylonConnector">{this.state.latency}</span>;
  }
}

export default PylonConnector;
