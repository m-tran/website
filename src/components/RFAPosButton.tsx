import React from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const RFAPosButton: React.FC<{ link: string; title: string }> = (
  props
) => {
  const button = {
    color: "#000000",
    background: "#FA8D1F",
    fontFamily: "Mazzard-H",
    fontSize: "45px",
    borderColor: "#FA8D1F",
    borderRadius: "15px",
    paddingTop: "20px",
    paddingBottom: "20px",
    margin: "auto",
  };

  return (
    <Link to={props.link}>
      <Row
        className="pos-container-button justify-content-center align-items-center"
        style={button}
      >
        <h2 className="text-center">{props.title}</h2>
      </Row>
    </Link>
  );
};
