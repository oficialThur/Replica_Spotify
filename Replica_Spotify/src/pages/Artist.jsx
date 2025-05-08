import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from 'react-router-dom';
import SongList from '../components/SongList';
import { artistArray } from '../assets/database/artists';
import { songsArray } from '../assets/database/songs';


const Artist = () => {

  const {id} =useLocation()

  const artistObj = artistArray.filter((currentAtistObj) => 
  currentAtistObj.id === Number(id))[0];

  const songsArrayFromArtist = songsArray.filter((currentSongObj) =>
  currentSongObj.artist === artistObj.name);

  const randomIndex = Math.floor(
    Math.random() * (songsArrayFromArtist.length - 1)
  );

  const randomIdFromArtist = songsArrayFromArtist[randomIndex].id;


  return (
    <div className='artist'>

      <div className='artist_header' 
      style={{ 
        backgroundImage: 
        'linear-gradient(to bottom, var(--_shade), var(--_shade)),url(${artistObj.banner})',
        }}
       >
        <h2 className='artist_title'>{artistObj.name}</h2>
      </div>

      <div className='artist_body'>
        <h2>Populares</h2>
        <SongList songsArray={songsArrayFromArtist}/>
      </div>

      <Link to={`/song/${randomIdFromArtist}`}>
        <FontAwesomeIcon className="single-item_icon-artist" 
        icon={faCirclePlay} />
      </Link>

    </div>
  )
}

export default Artist