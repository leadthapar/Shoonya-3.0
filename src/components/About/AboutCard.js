import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Lörem ipsum fysans hackathon och dedade. Sars nynt att dissade as. 
          Denylig belogi airbaghjälm osågt. Kapselbryggare exol de jitt, att grit. 
          Neogam blinga kulturell appropriering apofas nesa. Kosläpp dialig med tädobel. 
          Antisocial voras miment, respektive hadat. Tebel konfili. Orys frisparkssprej, 
          nyns. Käprefav idisade posttologi premusam. Muvor vav liksom sode. Pongar mansskatt. 
          Dispen pseudonera plav. 
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> event 1
            </li>
            <li className="about-activity">
              <ImPointRight /> event 2
            </li>
            <li className="about-activity">
              <ImPointRight /> event3
            </li>
          </ul>
          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "It does not do to dwell on dreams and forget to live"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
