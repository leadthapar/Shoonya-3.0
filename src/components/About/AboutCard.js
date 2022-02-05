import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Shoonya 3.0 is an annual flagship week-long event organized by the members of LEAD society, Thapar Institute of Engineering and Technology, Patiala.
Continuing the legacy forward, the event's third edition comprises three major sub-events, The Triwizard Tournament, Weasely's Pitchers, Chamber of Secrets. Shoonya 3.0 targets both technical and non-technical skills of candidates. In addition, it is a team-based event, so it encourages the spirit of teamwork. Each event poses a new challenge and requires you to put on your creative hats and play with codes in the magical realm. The three events are as follows:

          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> The Triwizard Tournament
            </li>
            <li className="about-activity">
              <ImPointRight /> Weasley's Pitchers
            </li>
            <li className="about-activity">
              <ImPointRight /> Chamber of Secrets (CTF)
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
