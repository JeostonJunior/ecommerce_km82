import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import "./Slider.css";
import { useState } from "react";
import { sliderItems } from "../data";

const Arrow = styled.div`
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
`;

const Slider = () => {
  //const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {};
  return (
    <div className="SliderContainer">
      <Arrow
        className="Arrow"
        direction="left"
        onClick={() => handleClick("left")}
      >
        <ArrowLeftOutlined />
      </Arrow>
      <div className="Wrapper">
        <div className="Slide">
          <div className="ImageContainer">
            <img
              src="https://diariodonordeste.verdesmares.com.br/image/contentid/policy:7.4586863:1639535507/Beneficio-da-banana.jpg?f=default&$p$f=1e578d9"
              alt=""
              className="Image"
            />
          </div>

          <div className="InfoContainer">
            <h1 className="Title">Banana</h1>
            <p className="Description">
              A MAIS COTADA ENTRE OS RATOS DE ACADEMIA
            </p>
            <input type="button" value="SHOW ME" className="Button" />
          </div>
        </div>
      </div>
      <Arrow
        className="Arrow"
        direction="right"
        onClick={() => handleClick("right")}
      >
        <ArrowRightOutlined />
      </Arrow>
    </div>
  );
};

export default Slider;
