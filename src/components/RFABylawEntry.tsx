import React from "react";
import { Row, Col } from "react-bootstrap";

export const RFABylawEntry: React.FC<{
  date: string;
  bylawName: string;
  download: string;
}> = (props) => {
  const background: React.CSSProperties = {
    backgroundColor: "white",
    borderRadius: "20px",
    border: "10px solid rgba(255, 204, 0, 0.5)",
    padding: "5px",
    fontFamily: "BeVietnam",
    fontSize: "large",
    textAlign: "center",
  };
  return (
    <Row>
      <Col xs={3} style={background}>
        <p>{props.date}</p>
      </Col>
      <Col xs={7} style={background}>
        <p>{props.bylawName}</p>
      </Col>
      <Col xs={2} style={background}>
        <p>
          <a href={props.download} download>
            Download
          </a>
        </p>
      </Col>
    </Row>
  );
};
