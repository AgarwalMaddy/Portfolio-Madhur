import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Madhur Agarwal </span>
            from <span className="purple">Nagina, India.</span>
            <br /> I am a final year student pursuing Bachelor of Technology (B.Tech)
            in Computer Science and Engineering at VIT Bhopal University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Play Sports like Cricket, Badminton.
            </li>
            <li className="about-activity">
              <ImPointRight /> Follow E-Sports Tournaments in India.
            </li>
            <li className="about-activity">
              <ImPointRight /> Love to do art and photograhy.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Failure not always comes with mistake, 
             <br />sometimes things may not have gone the right way!"{" "}
          </p>
          <footer className="blockquote-footer">Madhur</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
