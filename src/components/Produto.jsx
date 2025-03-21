import React from 'react'

// Importanto imagens
import produto1 from "../assets/img01.jpg";


const Produto = () => {
  return (
    <section>
        <h1>Página de Produtos</h1>
        <img src={produto1} alt="imagem" className="img"/>
        {/* <img src={produto2} alt="imagem" className="img"/>
        <img src={produto3} alt="imagem" className="img"/>
        <img src={produto4} alt="imagem" className="img"/> */}
    </section>
  )
}

export default Produto