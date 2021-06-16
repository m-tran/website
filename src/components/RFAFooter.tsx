import React from "react";
import { Row, Container, Col, Image } from "react-bootstrap";

import facebookIcon from "@/media/Social Media Logos/facebook.png";
import instagramIcon from "@/media/Social Media Logos/instagram.png";
import linkedin from "@/media/Social Media Logos/linkedin.png";
import guidestar from "@/media/Social Media Logos/guidestar.png";

import { Link } from "react-router-dom";

export const RFAFooter: React.FC = () => {
  const darkBrown: React.CSSProperties = {
    color: "#532F0A",
  };
  const linkStyle: React.CSSProperties = {
    fontFamily: "BeVietnam",
    fontSize: "large",
    color: "#C06202",
  };
  const headerStyle: React.CSSProperties = {
    fontFamily: "Oswald",
  };
  const copyrightDisclaimer: React.CSSProperties = {
    fontFamily: "BeVietnam",
    textAlign: "center",
  };
  const iconSize: React.CSSProperties = {
    width: "4rem",
    height: "4rem",
    margin: "0.1em",
  };

  return (
    <Row style={{ backgroundColor: "#ffcc004d" }}>
      <Container>
        <br />
        <Row className="justify-content-center">
          <Col lg={3}>
            <h1 style={headerStyle}>NAVIGATION</h1>
            <Link style={linkStyle} className="C06202" to="/">
              <p>Home</p>
            </Link>
            <Link style={linkStyle} to="/individlearners">
              <p>Enroll</p>
            </Link>
            <Link style={linkStyle} to="/volunteer-overview">
              <p>Volunteer</p>
            </Link>
            <Link style={linkStyle} to="/about-overview">
              <p>About</p>
            </Link>
            <Link style={linkStyle} to="/contact">
              <p>Contact</p>
            </Link>
            <Link style={linkStyle} to="/news">
              <p>News</p>
            </Link>
          </Col>
          <br />
          <Col lg={3}>
            <h1 style={headerStyle}>FIND US</h1>
            <p style={{ ...linkStyle, ...darkBrown }}>
              EMAIL |{" "}
              <a style={linkStyle} href={"mailto:info@roboticsforall.net"}>
                info@roboticsforall.net
              </a>
            </p>
            <p style={{ ...linkStyle, ...darkBrown }}>
              PHONE |{" "}
              <a style={linkStyle} href={"tel:+6506659734"}>
                (650)-665-9734
              </a>
            </p>
            <div style={{ ...linkStyle, ...darkBrown }}>
              ADDRESS |{" "}
              <a
                target="_blank"
                style={linkStyle}
                href="https://www.google.com/maps/place/Palo+Alto,+CA+94302/@37.4400162,-122.1487548,15z/data=!3m1!4b1!4m8!1m2!2m1!1sP.O.+Box+56,+Palo+Alto,+CA+94302!3m4!1s0x808fbb1b431541ef:0x2d06ff09a989536f!8m2!3d37.44!4d-122.14"
              >
                P.O. Box 56, Palo Alto, CA 94302
              </a>
            </div>
            <div className="d-flex align-items-baseline">
              <a
                target="_blank"
                href="https://www.facebook.com/roboticsforalleducation/"
              >
                <Image style={iconSize} src={facebookIcon} />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/roboticsforall/"
              >
                <Image style={iconSize} src={instagramIcon} />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/robotics-for-all"
              >
                <Image style={iconSize} src={linkedin} />
              </a>
              <a target="_blank" href="https://www.guidestar.org/">
                <Image
                  style={{ width: "8rem", height: "8rem" }}
                  src={guidestar}
                />
              </a>
            </div>
          </Col>
          <br />
          <Col lg={3}>
            <h1 style={headerStyle}>MORE</h1>
            <Link style={linkStyle} to="/more-privacypolicy">
              <p>Privacy Policy</p>
            </Link>
            <Link style={linkStyle} to="/more-websitetos">
              <p>Website Terms of Use</p>
            </Link>
            <Link to="/more-bylaws" style={linkStyle}>
              <p>Robotics For All Bylaws</p>
            </Link>
            <Link to="/more-meetingrecords" style={linkStyle}>
              <p>Meeting Minutes & Agendas</p>
            </Link>
            <div style={{ ...linkStyle, ...darkBrown }}>
              TAX IDs |{" "}
              <a
                target="_blank"
                href="https://www.guidestar.org/profile/83-2012119"
                style={linkStyle}
              >
                83-2012119
              </a>
            </div>
          </Col>
          <br />
        </Row>
        <Container>
          <p style={copyrightDisclaimer}>
            <strong>
              Robotics For All 2018-2021© Photos of minors were used with
              permission from their parent/guardian.{" "}
            </strong>
            Robotics for All has and will never discriminate against a student
            or a volunteer on any basis, including gender expression, ethnicity,
            sexual orientation, religion, nationality, legal status, disability,
            political stances, or any other factor that can be discriminated
            against.
          </p>
        </Container>
      </Container>
    </Row>
  );
};
