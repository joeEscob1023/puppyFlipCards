import React, { Component } from "react";
import PuppyItem from "./PuppyItem";
import { Container, Row, Col } from "reactstrap";

export class Puppies extends Component {
  render() {
    let puppyCards = this.props.puppies.map((puppy, index) => (
      <Col md="4" key={index}>
        <PuppyItem
          puppy={puppy}
          index={index}
          changeImage={this.props.onClick}
        />
      </Col>
    ));
    return (
      <Container fluid>
        <Row>{puppyCards}</Row>
      </Container>
    );
  }
}

export default Puppies;
