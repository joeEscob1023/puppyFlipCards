import React, { Component } from "react";
import Header from "./components/Header";
import Puppies from "./components/Puppies";
import axios from "axios";

export class App extends Component {
  state = {
    puppies: [],
    flipped: false
  };

  componentDidMount() {
    axios
      .get("https://dog.ceo/api/breeds/image/random/6")
      .then(res => this.setState({ puppies: res.data.message }));
  }

  flip = index => {
    /*
    I want to make sure when the button is clicked it loads a new image for that one image pannel.
    I know I will need the index of which pannel I want to change, and I know i will need the api link to insert a new random dog.
   */
    this.setState({
      puppies: this.state.puppies.map(puppy => {
        if (puppy.index === index) {
          console.log("true");
          console.log(puppy.index);
          console.log(index);
        }
        return puppy;
      })
    });
  };

  render() {
    return (
      <div>
        <Header />
        <Puppies puppies={this.state.puppies} onClick={this.flip} />
      </div>
    );
  }
}

export default App;
