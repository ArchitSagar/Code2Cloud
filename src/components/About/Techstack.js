import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiFirebase,
  SiDocker,
  SiTerraform,
  SiAnsible,
  SiPuppet,
  SiKubernetes,
  SiGithubactions,
  SiMicrosoftazure,
  SiGooglecloud,
} from "react-icons/si";
import "./Techstack.css"; // ✅ Make sure this file is in the same folder

function Techstack() {
  const techStack = [
    { icon: <CgCPlusPlus />, name: "C++" },
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <DiReact />, name: "React" },
    { icon: <DiPython />, name: "Python" },
    { icon: <DiGit />, name: "Git" },
    { icon: <SiDocker />, name: "Docker" },
    { icon: <SiKubernetes />, name: "Kubernetes" },
    { icon: <SiTerraform />, name: "Terraform" },
    { icon: <SiAnsible />, name: "Ansible" },
    { icon: <SiPuppet />, name: "Puppet" },
    { icon: <SiGithubactions />, name: "GitHub Actions" },
    { icon: <SiMicrosoftazure />, name: "Azure" },
    { icon: <SiGooglecloud />, name: "Google Cloud" },
    { icon: <SiFirebase />, name: "Firebase" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techStack.map((tech, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          <div className="icon-container">
            {tech.icon}
            <div className="tech-label">{tech.name}</div>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
