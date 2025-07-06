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

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="C++">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="JavaScript">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Node.js">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="React">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Python">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Git">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Docker">
        <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Kubernetes">
        <SiKubernetes />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Terraform">
        <SiTerraform />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Ansible">
        <SiAnsible />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Puppet">
        <SiPuppet />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="GitHub Actions">
        <SiGithubactions />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Azure">
        <SiMicrosoftazure />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Google Cloud">
        <SiGooglecloud />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Firebase">
        <SiFirebase />
      </Col>
    </Row>
  );
}

export default Techstack;
