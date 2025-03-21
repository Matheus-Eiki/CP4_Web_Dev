import React from 'react'

// Importanto imagens
import produto1 from "../assets/img01.jpg";


const Produto = () => {
  return (
    <section className='produto'>
      <h1>Camisas disponíveis</h1>
      <div className='c-produto'>
        <img src={produto1} alt="imagem" className="img"/>
        <img src={produto1} alt="imagem" className="img"/>
        <img src={produto1} alt="imagem" className="img"/>
      </div>
        {/* <img src={produto2} alt="imagem" className="img"/>
        <img src={produto3} alt="imagem" className="img"/>
        <img src={produto4} alt="imagem" className="img"/> */}
    </section>
  )
}

export default Produto