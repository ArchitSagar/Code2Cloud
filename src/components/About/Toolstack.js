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
import "./Techstack.css"; // ✅ reuse same CSS

function Toolstack() {
  const tools = [
    { icon: <SiWindows />, name: "Windows" },
    { icon: <SiLinux />, name: "Linux" },
    { icon: <SiVisualstudiocode />, name: "VS Code" },
    { icon: <SiNotion />, name: "Notion" },
    { icon: <SiVercel />, name: "Vercel" },
    { icon: <SiNetlify />, name: "Netlify" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          <div className="icon-container">
            {tool.icon}
            <div className="tech-label">{tool.name}</div>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
