
import React from 'react'
import '../css/style.css'
import { Link } from 'react-router-dom'

// Function arrow para navegação
const Nav =() => {

    return (
  
    <section className="nav">
      <Link to="/Home" className="nLink">Home</Link>
       <Link to="/Produto" className="nLink">Produtos</Link>
      <Link to="/Sobre" className="nLink">Sobre</Link>
    </section>
  
    )
  }
  
  export default Nav