import React, { Component } from "react";
import PuppyItem from "./PuppyItem";
import { Container, Row, Col } from "reactstrap";

export class Puppies extends Component {
  render() {
    //key prop isnt working and im not sure why.
    let puppyCards = this.props.puppies.map((puppy, index) => (
      <Col md="4">
        <PuppyItem puppy={puppy} key={index} />
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
