import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiVercel,
  SiNotion,
  SiNetlify,
  SiLinux,
  SiWindows,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="Windows">
        <SiWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Linux">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="VS Code">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Notion">
        <SiNotion />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Vercel">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Netlify">
        <SiNetlify />
      </Col>
    </Row>
  );
}

export default Toolstack;
