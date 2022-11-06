import React from 'react'
import CartView from './CartView'
import {useContext} from 'react';
import {CartContext} from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './CartViewContainer.css'

export default function CartViewContainer() {

    const {cart, getItemPrice, emptyCart} = useContext(CartContext)
  
    return (
        <>
        <div id='cart'>
    
            <div className="container">  
                <Link to='/'><button id='btnSeguirComprandoCart'>Seguir Comprando</button></Link>
                    {
                    cart.map( item => (
                        <CartView key={item.id} item={item} />
                    ))
                    }
                <div className="card mb-4 bg-dark text-white">
                    <h4 className='PrecioTotal'>Total: $ {getItemPrice()}</h4>
                </div>
                <div className="card align-items-center bg-dark text-white">
                    <div className="card-body ">
                    <Link to={'/checkout'}><button type="button" className="btnTerminarCompra">Terminar compra</button></Link>
                    </div>
                </div>
            </div>
      </div>
  
  </>
  )
}