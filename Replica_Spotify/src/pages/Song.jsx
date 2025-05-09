import React from 'react'
import Player from '../components/Player'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { songsArray } from "../assets/database/songs";
import { artistArray } from "../assets/database/artists";


const Song = () => {
  const { id } = useParams()

  const { image, name, duration, artist, audio } = songsArray.filter(
    (currentSongObj) => currentSongObj.id === Number(id)
  )[0];

  const artistObj = artistArray.filter(
    (currentArtistObj) => currentArtistObj.name === artist
  )[0];

  const songsArrayFromArtist = songsArray.filter(
    (currentSongObj) => currentSongObj.artist === artist
  );

  const randomIndex = Math.floor(
    Math.random() * (songsArrayFromArtist.length - 1)
  );

  const randomIndex2 = Math.floor(
    Math.random() * (songsArrayFromArtist.length - 1)
  );

  const randomIdFromArtist = songsArrayFromArtist[randomIndex].id;
  const randomId2FromArtist = songsArrayFromArtist[randomIndex2].id;

  return (
    <div className='song'>

      <div className='song_container'>
      <div className='song_image-container'>
          <img src={image} alt={`Imagem da música ${name}`} />
        </div>
      </div>
      
      <div className='song_bar'>
        <Link className='song_artist-image'>
          <img 
            width={75}
            height={75}
            src={artistObj.image}
            alt={`Imagem do Artista ${artist}`} />
        </Link>

        <Player duration={duration}
          randomIdFromArtist={randomIdFromArtist}
          randomId2FromArtist={randomId2FromArtist}
        />

        <div>  
          <p className='song-name'>{name}</p> 
          <p>{artist}</p>
        </div>
      </div>
    </div>
  )
}

export default Song

