import React from "react";
import { Image } from "react-bootstrap";

export const RFAVolOverviewImg: React.FC<{
  color: string;
  title: string;
  image: string;
}> = (props) => {
  const cardTitle = {
    fontFamily: "Oswald",
    fontSize: "2.5rem",
    color: props.color,
  };
  const overviewImgSize = {
    width: "18rem",
  };
  return (
    <div>
      <a
        target="_blank"
        href="https://www.bonfire.com/store/rfa/"
        rel="noreferrer"
      >
        <Image style={overviewImgSize} src={props.image} />
      </a>
      <p className="text-center" style={cardTitle}>
        {props.title}
      </p>
    </div>
  );
};
