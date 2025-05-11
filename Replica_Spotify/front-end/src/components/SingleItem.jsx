import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SingleItem = ({ id, name, image, banner, artist, idPath }) => {
  return (
    <Link to={`${idPath}/${id}`} className="single-item">
      <div className="single-item_div-image-button">
        <div className="single-item_div-image">
          <img
            className="single-item_image"
            src={image}
            alt={`Imagem do Artista ${name}`}
          />
        </div>

        <FontAwesomeIcon className="single-item_icon " icon={faCirclePlay} />
      </div>

      <div className="single-item_texts">
        <div className="single-item_2lines">
          <p className="single-item_title">{name}</p>
        </div>

        <p className="single-item_type">{artist ?? "Artista"}</p>
      </div>
    </Link>
  )
}

export default SingleItem;
