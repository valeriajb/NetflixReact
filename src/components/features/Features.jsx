import React from "react";
import ButtonFeatures from '../buttons/ButtonFeatures';
import PlayArrowSharpIcon from '@mui/icons-material/PlayArrowSharp';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'; import "./Features.scss";
function Features({ type }) {
  return (
    <div className="features-container">
      <img
        src="https://i.blogs.es/2c1ee1/matrix-franquicia/1366_2000.jpeg"
        alt="" />
        {type && (
          <div className="categories-container">
            <span>{type === "movie" ? "Movies" : "Series"}</span>
            <select name="genre" id="genre">
              <option>Género</option>
              <option value="adventure">Adventure</option>
              <option value="comedy">Comedy</option>
              <option value="crime">Crime</option>
              <option value="fantasy">Fantasy</option>
              <option value="historical">Historical</option>
              <option value="horror">Horror</option>
              <option value="romance">Romance</option>
              <option value="sci-fi">Sci-fi</option>
              <option value="thriller">Thriller</option>
              <option value="western">Western</option>
              <option value="animation">Animation</option>
              <option value="drama">Drama</option>
              <option value="documentary">Documentary</option>
            </select>
          </div>
        )}
      <div className="features-info-container">
        <img
          src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
          alt="" />
        <span>Un experto en computadoras descubre que su mundo es una simulación total creada con maliciosas intenciones por parte de la ciberinteligencia. ¿Lo acompañas a conocer este nuevo mundo?</span>
        <div className="info-buttons">
          <ButtonFeatures icon={<PlayArrowSharpIcon />} name="Play" />
          <ButtonFeatures icon={<InfoOutlinedIcon />} name="Info" />
        </div>
      </div>
    </div>
  
)}

export default Features;
