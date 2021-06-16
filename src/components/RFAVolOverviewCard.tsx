import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";

export const RFAVolOverviewCard: React.FC<{
  backgroundcolor: string;
  buttonColor: string;
  arrowLocation: string;
  learnMoreLink: string;
  title: string;
  description: string;
  applyLink: string;
  buttonfloat: string;
  cardfloat: string;
}> = (props) => {
  const positionsTitle = {
    fontFamily: "Oswald",
    fontSize: "3.2rem",
  };
  const description = {
    fontFamily: "BeVietnam",
    fontSize: "1.3rem",
  };
  const card = {
    borderRadius: "15px",
    backgroundColor: props.backgroundcolor,
  };
  const button = {
    borderRadius: "15px",
    backgroundColor: props.backgroundcolor,
    color: props.buttonColor,
    fontFamily: "Oswald",
    fontSize: "2.2rem",
  };
  const arrow = {
    borderBottom: `70px solid ${props.backgroundcolor}`,
    borderRight: "45px solid transparent",
    borderLeft: "45px solid transparent",
    borderTop: "20px solid transparent",
    width: 0,
  };
  return (
    <Container>
      <Row>
        <div style={{ paddingLeft: props.arrowLocation }}>
          <div style={arrow}></div>
        </div>
      </Row>
      <Row>
        <Col className="center-align me-3 px-4" md={8} style={card}>
          <Row className="align-items-center">
            <h2 style={positionsTitle}>{props.title}</h2>
            <p style={description}>{props.description}</p>
          </Row>
        </Col>
        <Col>
          <Row className="h-100 align-items-between">
            <Link
              to={props.learnMoreLink}
              className="aff-org-card-link center-align mb-md-3 p-3"
              style={button}
            >
              Learn More
            </Link>
            <Link
              to={props.applyLink}
              className="aff-org-card-link center-align p-3"
              style={button}
            >
              Apply
            </Link>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
