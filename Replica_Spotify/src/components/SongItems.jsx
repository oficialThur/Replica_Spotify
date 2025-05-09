import React from "react";
import { Link } from "react-router-dom";

const SongItems = ({ image, name, duration, artist, audio, id, index }) => {
  return (
    <Link to={`/song/${id}`} className="song-item">
      <div className="song-item_number-album">
        <p>{index + 1}</p>

        <div className="song-item_album">
          <img
            src={image}
            alt={`Imagem da Música ${name}`}
            className="song-item_image"
          />

          <p className="song-item_name">{name}</p>
        </div>
      </div>

      <p>{duration}</p>
    </Link>
  );
};

export default SongItems;