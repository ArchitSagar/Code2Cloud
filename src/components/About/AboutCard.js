import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Archit Sagar</span>.
            <br />
            I am an <span className="purple">Automation Developer</span> passionate about{" "}
            <span className="purple">DevOps</span>,{" "}
            <span className="purple">Web Development</span>.
            <br />
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

          <p
            style={{
              textAlign: "center",
              fontStyle: "italic",
              marginTop: "30px",
              cursor: "help",
            }}
            title="You have the right to perform your actions, but never to the fruits of those actions. Never let the fruits of action be your motive, and never stop doing your duty."
          >
            कर्मण्येवाधिकारस्ते मा फलेषु कदाचन । <br />
            मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥ <br />
            <span className="purple" style={{ fontSize: "0.9rem" }}>
              — Bhagavad Gita 2.47
            </span>
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
