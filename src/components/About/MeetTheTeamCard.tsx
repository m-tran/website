import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import Markdown from "markdown-to-jsx";
import { ColorThemes } from "@/colors";
import Carousel from "react-multi-carousel/lib/Carousel";
import "react-multi-carousel/lib/styles.css";
import exitIcon from "@/media/Icons/exitIcon.svg";

import "../../index.css";

interface IProps {
  infoJSON: any;
  backgroundColor: string;
  color: string;
}

export const MeetTheTeamCard: React.FC<IProps> = (props: IProps) => {
  const [dropdownDisplay, setDropdownDisplay] = React.useState(<></>);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 2,
      slidesToSlide: 1,
    },
  };

  const imgBoxShadow = {
    boxShadow: "0px 7px 8px -8px #000000",
  };

  const dropdownControl: React.CSSProperties = {
    zIndex: 10000,
    position: "fixed",
    left: 0,
    top: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.4)" /* Black w/ opacity */,
  };
  const dropdownContainer: React.CSSProperties = {
    position: "fixed",
    left: "50%",
    top: "50%",
    width: "100vw",
    transform: "translate(-50%, -50%)",
  };
  const dropdownHeader: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
  };

  const constructModal = (info: any) => {
    setDropdownDisplay(
      <div style={dropdownControl}>
        <div
          style={dropdownContainer}
          className="d-flex justify-content-center h-50"
        >
          <Row
            className="w-75"
            style={{
              backgroundColor: props.backgroundColor,
              borderRadius: "15px",
              boxShadow: "-1px 8px 15px 1px rgba(0,0,0,0.57)",
              overflowY: "auto",
            }}
          >
            <header>
              <button
                onClick={() => {
                  setDropdownDisplay(<></>);
                }}
              >
                <img width="50" src={exitIcon} />
              </button>
              <h1 className="nameHeader">{info.name}</h1>

            </header>
            <h1 className="titleHeader" style={{ color: props.color}}>
              {info.title_pronouns}
            </h1>
            <p>
              <Markdown className="bodyText">{info.description}</Markdown>
            </p>
          </Row>
        </div>
      </div>
    );
  };

  return (
    <>
      <Carousel
        swipeable={true}
        draggable={true}
        responsive={responsive}
        transitionDuration={500}
      >
        {props.infoJSON.map((info: any, i: number) => (
          <div
            style={{
              backgroundColor: props.backgroundColor,
              borderRadius: "15px",
            }}
            onClick={() => {
              constructModal(info);
            }}
            className="d-flex my-3 p-3"
          >
            <Col>
              <Image
                fluid
                src={info.image.replace("/public", "")}
                style={imgBoxShadow}
              />
            </Col>
            {window.innerWidth <= 600 ? (
              <></>
            ) : (
              <Col style={{ overflowY: "auto" }} md={7} className="ms-2">
                <h1 className="nameHeader">{info.name}</h1>
                <h1 className="titleHeader" style={{ color: props.color}}>
                  {info.title_pronouns}
                </h1>
                <Markdown className="bodyText">{info.description}</Markdown>
              </Col>
            )}
          </div>
        ))}
      </Carousel>

      {dropdownDisplay}
    </>
  );
};
