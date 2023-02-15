import React, { useState, useRef } from "react";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import MovieItem from "../movieitem/MovieItem";
import "./ListMovie.scss";
import { display } from "@mui/system";
function ListMovie({ title = "Popular en Netflix" }) {


  const sliderRef = useRef();
  const [handleClick, setHandleClick] = useState(0);
  const [isVisibleLeft, setisVisibleLeft] = useState(false);
  const [isVisibleRight, setisVisibleRight] = useState(false);

  const handleMoveSlider = (distance) => {
    let distanceViewPort = sliderRef.current.getBoundingClientRect().x - 50;

    if (distance === "left" && handleClick > 0) {
      setisVisibleRight(false)
      if (handleClick === 1) {setisVisibleLeft(false)}
      setHandleClick(handleClick - 1)
      sliderRef.current.style.transform = `translateX(${230 + distanceViewPort}px)`;
    }

    if (distance === "right" && handleClick < 5) {
      setisVisibleLeft(true)
      if (handleClick===4){setisVisibleRight(true)}
      setHandleClick(handleClick + 1)
      sliderRef.current.style.transform = `translateX(${-230 + distanceViewPort}px)`;
    }
  };

  return (
    <div className="container-listMovies">
      <h3>{title}</h3>
      <div className="container-slider">
        <ArrowBackIosNewOutlinedIcon
          className="arrow arrowLeft"
          onClick={() => handleMoveSlider("left")}
          style={{ display: !isVisibleLeft && "none" }}
        />
        <div className="container-wrap" ref={sliderRef}>
          <MovieItem i={0} />
          <MovieItem i={1} />
          <MovieItem i={2} />
          <MovieItem i={3} />
          <MovieItem i={4} />
          <MovieItem i={5} />
          <MovieItem i={6} />
          <MovieItem i={7} />
          <MovieItem i={8} />
          <MovieItem i={9} />
        </div>
        <ArrowBackIosNewOutlinedIcon
          className="arrow arrowRight"
          onClick={() => handleMoveSlider("right")}
          style={{ display: isVisibleRight && "none" }}
        />
      </div>
    </div>
  );
}

export default ListMovie;
