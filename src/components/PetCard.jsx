import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const PetCard = ({ name, race, type, location }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Header>name: {name}</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>race: {race}</ListGroup.Item>
          <ListGroup.Item>type: {type}</ListGroup.Item>
          <ListGroup.Item>location: {location}</ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
};

export default PetCard;
