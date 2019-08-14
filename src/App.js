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

  changeImage = index => {
    let newPuppy = this.state.puppies.map((puppy, i) => {
      if (index === i) {
        //if theres a match, I want to change the panel image to another random image of a dog.
        //Wondering if I need to add more to my state to change each individual panel on button click
        axios
          .get("https://dog.ceo/api/breeds/image/random")
          .then(res => this.setState({ puppy: res.data.message }));
      }
      return puppy;
    });
  };

  render() {
    return (
      <div>
        <Header />
        <Puppies puppies={this.state.puppies} onClick={this.changeImage} />
      </div>
    );
  }
}

export default App;
