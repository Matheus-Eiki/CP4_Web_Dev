import React from 'react'

// Importanto imagens
import produto1 from "../assets/produto1.png";
import produto2 from "../assets/produto2.png";
import produto3 from "../assets/produto3.png";
import produto4 from "../assets/produto4.png";


const Produto = () => {
  return (
    <section>
        <h1>Página de Produtos</h1>
        <img src={produto1} alt="imagem" className="img"/>
        <img src={produto2} alt="imagem" className="img"/>
        <img src={produto3} alt="imagem" className="img"/>
        <img src={produto4} alt="imagem" className="img"/>
    </section>
  )
}

export default Produto