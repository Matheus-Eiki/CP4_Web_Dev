import React from 'react'

// importando imagens
import gif from '../assets/gif.gif';

const Sobre = () => {
  return (
    <section className='sobre'>
        <h1>Saiba mais</h1>
        <img src={gif} alt="Gif-promocao-camisa-brasil" className="gif"/>
        <div className='c-sobre'>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi nisi impedit dolores, earum error perferendis soluta odit, recusandae consectetur rem laudantium repellendus ut maxime exercitationem rerum sed, id assumenda labore.</p>
        </div>
    </section>
  )
}

export default Sobre