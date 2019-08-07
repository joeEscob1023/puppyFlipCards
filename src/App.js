import React, { Component } from "react";
import Header from "./components/Header";
import Puppies from "./components/Puppies";
import axios from "axios";

//look in the console, its loading twice and the first length is 0 and the next is 6
//I think this has something to do with the key prop not acting right

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
    console.log(this.state.puppies.length);
    return (
      <div>
        <Header />
        <Puppies puppies={this.state.puppies} />
      </div>
    );
  }
}

export default App;
