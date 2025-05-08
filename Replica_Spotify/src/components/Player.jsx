import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faBackwardStep, faForwardStep } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const Player = () => {
  return (
    <div className='player'>
        <div className='player_cotrollers'>
            <Link >
                <FontAwesomeIcon className="player_icon" 
                icon={faBackwardStep} />    
            </Link>

            <FontAwesomeIcon className="player_icon player_icon-play" 
            icon={faCirclePlay} />

            <Link >
                <FontAwesomeIcon className="player_icon" 
                icon={faBackwardStep} />
            </Link>
        </div>

        <div className='player_progress'>
            <p></p>

            <div className='player_bar'>
                <div className='player_bar-progress'>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Player