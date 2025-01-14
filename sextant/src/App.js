import React, { Component } from "react";
import "./App.css";
import Banner from "./Banner";
import Exhibit from "./Exhibit";
import Address from "./Address";
import PylonConnector from "./PylonConnector";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner bannerText="Sextant" />
        <Exhibit name="Public IPV4's address">
          <Address url="https://api.ipify.org?format=json"></Address>
        </Exhibit>
        <Exhibit name="Public IPV6's address">
          <Address url="https://api64.ipify.org?format=json"></Address>
        </Exhibit>
        <Exhibit name="Pylon Packet Latency">
          <PylonConnector />
        </Exhibit>
      </div>
    );
  }
}

export default App;
