import React, { useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import {Link} from 'react-router-dom';
import "./MovieItem.scss";
function MovieItem({ i, name,descrip,image,date }) {
  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="container-movie"
      onMouseEnter={() => setIsHovered(true)}
      onmouseleave={() => setIsHovered(false)}
      style={{ left: isHovered && i * 225 - 50 }}
    >
      <p>1</p>
      <img className="image-container"
        src="https://i.blogs.es/2c1ee1/matrix-franquicia/1366_2000.jpeg"
        alt=""
      />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
          <div className="container-infoMovie">
            <div className="container-infoIcons">
              <Link to="/movie"><PlayArrowIcon className="icons" /></Link>
              <AddIcon className="icons" />
              <ThumbUpOffAltIcon className="icons" />
              <ThumbDownOffAltIcon className="icons" />
            </div>
            <div className="dataMovie">
              <span>1h 34mins</span>
              <p>+18</p>
              <span>2020</span>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloribus, sapiente accusantium ab nostrum, hic dicta adipisci
            </p>
            <span>Action</span>
          </div>
        </>
      )}
    </div>
  );
}

export default MovieItem;
