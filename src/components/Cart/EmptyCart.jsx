import React from 'react'
import './EmptyCart.css'
import { Link } from 'react-router-dom'

export default function EmptyCart() {
  return (
    <div className='bg-dark text-white' id='emptyCart'>
          <h1 id='tituloEmpty'>Tu carrito esta vacio!!</h1>
          <Link to="/"><button className='btn btn-warning' id='botonRegresar'>Ir a comprar</button></Link>
    </div>
  )
}