import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { RFAVolOverviewCircle } from "./RFAVolOverviewCircle";

export const RFAVolOverviewHeader: React.FC<{
  title: string;
  description: string;
  image: string;
  headerTextColor: string;
}> = (props) => {
  const headerText: React.CSSProperties = {
    position: "relative",
    textAlign: "center",
    bottom: "3vw",
  };
  const pageHeader: React.CSSProperties = {
    fontFamily: "Mazzard-H",
    transform: "rotate(358deg)",
    color: props.headerTextColor,
  };
  const headerBlob: React.CSSProperties = {
    backgroundSize: "100% 100%",
    height: "45vw",
    width: "100vw",
    backgroundImage: `url(${props.image})`,
  };
  const pageHeaderDescription: React.CSSProperties = {
    fontFamily: "BeVietnam",
  };
  const statCircles: React.CSSProperties = {
    paddingLeft: "5rem",
  };

  return (
    <Row style={headerBlob}>
      <Container className="align-self-end">
        <Col>
          <Row style={statCircles}>
            <Col>
              <div>
                <RFAVolOverviewCircle
                  paddingtop={"3.3rem"}
                  width={"16rem"}
                  height={"16rem"}
                  top={"-20rem"}
                  title={"Work With:"}
                  subtext={"Levels of Curriculum"}
                  end={12}
                  subtextSize={"1.3rem"}
                  titleSize={"2.1rem"}
                ></RFAVolOverviewCircle>
              </div>
            </Col>
            <Col>
              <div>
                <RFAVolOverviewCircle
                  paddingtop={"3.3rem"}
                  width={"16rem"}
                  height={"16rem"}
                  top={"-32rem"}
                  title={"Join our:"}
                  subtext={"Active Volunteers"}
                  end={221}
                  subtextSize={"1.3rem"}
                  titleSize={"2.1rem"}
                ></RFAVolOverviewCircle>
              </div>
            </Col>
            <Col>
              <div>
                <RFAVolOverviewCircle
                  paddingtop={"3.8rem"}
                  width={"18rem"}
                  height={"17rem"}
                  top={"-23rem"}
                  title={"Support our:"}
                  subtext={"Students Taught"}
                  end={1296}
                  subtextSize={"1.6rem"}
                  titleSize={"2.4rem"}
                ></RFAVolOverviewCircle>
              </div>
            </Col>
          </Row>

          <div className="mb-5" style={headerText}>
            <Row className="justify-content-center">
              <h1 style={pageHeader} className="text-center header-size">
                {props.title}
              </h1>
            </Row>
            <Row className="justify-content-center">
              <p
                style={pageHeaderDescription}
                className="text-center header-description-size"
              >
                {props.description}
              </p>
            </Row>
          </div>
        </Col>
      </Container>
    </Row>
  );
};
