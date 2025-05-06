import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'

const Main = () => {
  return (
    <div className='main'>
      <div className='item-list'>

        <div className='item-list_header'>
          <h2>Artistas Populares</h2>
          <a className='item-list_link' href="">Mostrar mais</a>
        </div>
        <div className='single-item'>
          <div className='single-item_div-image'>
            <img className='single-item_image' src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4" alt="Imagem Henrique & Juliano" />
          </div>
          <FontAwesomeIcon className='single-item_icon' icon={faCirclePlay} />
          <div className='single-item_text'>
            <p className='single-item_title'>Henrique & Juliano</p>
            <p className='single-item_type'>Artista</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main