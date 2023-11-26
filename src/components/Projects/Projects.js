import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import GMN from "../../Assets/Projects/Guess my Number.png";
import DINGO from "../../Assets/Projects/DINGO.png";
import Portfolio from "../../Assets/Projects/Portfolio.png";
import LibraryCAFE from "../../Assets/Projects/LibraryCAFE.png";
import HostelComplaintTracker from "../../Assets/Projects/Hostel Complaint Tracker.png";

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
              imgPath={LibraryCAFE}
              isBlog={false}
              title="LibraryCAFE"
              description="Developed and implemented a feature-rich library management system, integrating live search filters and
              sorting options, facilitating seamless book viewing, renting, and management for users. Leveraged Firebase for user
              signup via Google authentication, and utilized a self-created API to fetch and display comprehensive book records."
              ghLink="https://github.com/AgarwalMaddy/Dev-Rev-Task"
              demoLink="https://dev-rev-task-lilac.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HostelComplaintTracker}
              isBlog={false}
              title="Hostel Complaint Tracker"
              description="Developed a web-based application designed to streamline the process of managing complaints within a college hostel complex which will be able to improve the efficiency of the workload by more than 60%"
              ghLink="https://github.com/priyanshu070702/vit_complaint_portal"
              demoLink="https://vit-complaint-portal.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DINGO}
              isBlog={false}
              title="DINGO"
              description="Interactive dog training video platform, enabling users to access a vast 
                           library of instructional videos. Implemented key features such as creating 
                           personalized playlists, incorporating a like feature for user feedback, 
                           enabling watch later functionality, and providing a comprehensive view of 
                           watch history."
              ghLink="https://github.com/AgarwalMaddy/DINGO"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              isBlog={false}
              title="Portfolio"
              description="My portfolio created using ReactJS is a visually stunning and interactive 
                           showcase of my skills and projects. With its seamless user interface and 
                           smooth navigation, it offers a delightful browsing experience, allowing 
                           visitors to easily explore my work and gain a comprehensive understanding of 
                           my abilities and accomplishments"
              ghLink="https://github.com/AgarwalMaddy/Portfolio-Madhur"
              demoLink="https://agarwalmadhur19.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GMN}
              isBlog={false}
              title="Guess my Number"
              description= "An interactive web game where users can challenge their problem-solving skills by guessing a number within a given range. Promoted user engagement through dynamic high/low indicators, encouraging players to improve their guesswork and enhance their logical thinking abilities."
              ghLink="https://github.com/AgarwalMaddy/Guess-the-Number"
              demoLink="https://guessing-number-madhur.vercel.app/"
            />
          </Col>



        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
