import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Chess from "../../Assets/Projects/Chess.png";
import Code2Cloud from "../../Assets/Projects/Code2Cloud.png";
import currencyConverter from "../../Assets/Projects/CurrencyConverter.png";
import stock from "../../Assets/Projects/stock.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Chess}
              isBlog={false}
              title="Elite Chess"
              description="A multiplayer and engine-based chess web app where users can play in real-time against other players or challenge a built-in chess engine. Built using React.js, Firebase, and an open-source chess engine, the app supports different difficulty levels."
              ghLink="https://github.com/ArchitSagar/chess"
              demoLink="http://elitechess.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Code2Cloud}
              isBlog={false}
              title="Code2Cloud: Portfolio Edition"
              description="Code2Cloud Portfolio automates the deployment of my personal portfolio using Docker, Terraform, and GitHub Actions, hosted on Azure with CI/CD built-in."
              ghLink="https://github.com/ArchitSagar/Code2Cloud"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stock}
              isBlog={false}
              title="StockStreet"
              description="A web app designed for beginners to learn key stock market terms and explore live charts of Indian stocks. It displays stock price movements along with buy indicators to help users understand market trends visually."
              ghLink="https://github.com/ArchitSagar/StockStreet"
              demoLink="https://stockstreet.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={currencyConverter}
              isBlog={false}
              title="Currency Converter"
              description="A simple web app to convert between global currencies in real-time using up-to-date exchange rates."
              ghLink="https://github.com/ArchitSagar/currencyConverter"             
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
