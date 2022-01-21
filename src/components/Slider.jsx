import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import "./Slider.css";

const Arrow = styled.div`
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
`;

const Slider = () => {
  return (
    <div className="SliderContainer">
      <Arrow className="Arrow" direction="left">
        <ArrowLeftOutlined />
      </Arrow>
      <Arrow className="Arrow" direction="right">
        <ArrowRightOutlined />
      </Arrow>
    </div>
  );
};

export default Slider;
