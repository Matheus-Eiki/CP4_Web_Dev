import React from 'react'

// Importanto imagens
import produto1 from "../assets/camisa1.png";
import produto2 from "../assets/camisa2.png";
import produto3 from "../assets/camisa3.png";
import produto4 from "../assets/camisa4.png";
import produto5 from "../assets/camisa5.png";
import produto6 from "../assets/camisa6.png";

const Produto = () => {
  return (
    <section className='produto'>
      <h1>Camisas disponíveis</h1>
      <div className='c-produto'>
        <img src={produto1} alt="Camiseta Corinthians" className="img"/>
        <img src={produto2} alt="Camiseta Santos" className="img"/>
        <img src={produto3} alt="Camiseta Seleção Brasil" className="img"/>
      </div>
      <div className='c-produto'>
        <img src={produto4} alt="Camiseta Clube do Remo" className="img"/>
        <img src={produto5} alt="Camiseta Real Madrid" className="img"/>
        <img src={produto6} alt="Camiseta Liverpool" className="img"/>
      </div>
    </section>
  )
}

export default Produto