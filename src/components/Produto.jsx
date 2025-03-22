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
        <div className='prod'>
          <h4>Corinthians | 2023</h4>
          <img src={produto1} alt="Camiseta Corinthians" className="img"/>
        </div>
        <div className='prod'>
          <h4>Santos | 2021</h4>
        <img src={produto2} alt="Camiseta Santos" className="img"/>
        </div>
        <div className='prod'>
          <h4>Brasil | 2020</h4>
          <img src={produto3} alt="Camiseta Seleção Brasil" className="img"/>
        </div>
      </div>
      <div className='container-produtos'>
      <div className='c-produto'>
        <div className='prod'>
          <h4>Clube do Remo | 2022</h4>
          <img src={produto4} alt="Camiseta Clube do Remo" className="img"/>
        </div>
        <div className='prod'>
          <h4>Real Madrid | 2018</h4>
          <img src={produto5} alt="Camiseta Real Madrid" className="img"/>
        </div>
        <div className='prod'>
          <h4>Liverpool | 2017</h4>
          <img src={produto6} alt="Camiseta Liverpool" className="img"/>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Produto