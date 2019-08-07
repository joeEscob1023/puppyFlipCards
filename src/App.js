import React, { Component } from "react";
import Header from "./components/Header";
import Puppies from "./components/Puppies";
import axios from "axios";

export class App extends Component {
  state = {
    puppies: []
  };

  componentDidMount() {
    axios
      .get("https://dog.ceo/api/breeds/image/random/6")
      .then(res => this.setState({ puppies: res.data.message }));
  }

  render() {
    return (
      <div>
        <Header />
        <Puppies puppies={this.state.puppies} />
      </div>
    );
  }
}

export default App;
