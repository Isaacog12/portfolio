import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">OGBOMO ISAAC </span>
            from <span className="purple"> Ore-Edo, Nigeria.</span>
            <br />
            I am currently a student at Veritas University Abuja..
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
