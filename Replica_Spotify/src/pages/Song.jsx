import React from 'react'
import Player from '../components/Player'
import { Link } from 'react-router-dom'

const Song = () => {
  return (
    <div className='song'>

      <div className='song_container'>
      </div>
      
      <div className='song_bar'>
        <Link className='song_artist-image'>
          <img 
            width={75}
            height={75}
            src="" alt="" />
        </Link>

        <Player/>

        <div className='song-name'>  

        </div>
      </div>
    </div>
  )
}

export default Song

