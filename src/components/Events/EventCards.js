import React from "react";
import Card from "react-bootstrap/Card";

function EventCards(props) {
  return (
    <Card className="event-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title style={{color:"#c770f0"}}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
       
      </Card.Body>
    </Card>
  );
}
export default EventCards;
