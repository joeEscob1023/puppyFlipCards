import React, { Component } from "react";
import { Card, CardImg, CardBody, Button } from "reactstrap";

export class PuppyItem extends Component {
  render() {
    return (
      <div>
        <Card style={{ marginBottom: "10px" }}>
          <CardImg
            style={imgStyles}
            top
            width="50%"
            src={this.props.puppy}
            alt="Image of dog"
          />
          <CardBody>
            <Button>Flip!</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

const imgStyles = {
  height: "400px",
  width: "auto"
};

export default PuppyItem;
