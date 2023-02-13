import React from "react";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import MovieItem from "../movieitem/MovieItem";
import "./ListMovie.scss";
function ListMovie() {
  return (
    <div className="container-listMovies">
      <h3>Continue to Watch</h3>
      <div className="container-slider">
        <ArrowBackIosNewOutlinedIcon className="arrow arrowLeft" />
        <div className="container-wrap">
          <MovieItem />
          <MovieItem />
          <MovieItem />
          <MovieItem />
          <MovieItem />
          <MovieItem />
          <MovieItem />
          <MovieItem />
          <MovieItem />
          <MovieItem />
          <MovieItem />
          <MovieItem />
          <MovieItem />
          <MovieItem />
        </div>
        <ArrowBackIosNewOutlinedIcon className="arrow arrowRight" />
      </div>
    </div>
  );
}

export default ListMovie;
