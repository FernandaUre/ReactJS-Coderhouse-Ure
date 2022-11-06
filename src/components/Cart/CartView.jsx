import React from 'react'
import {useContext} from 'react';
import {CartContext} from '../../context/CartContext';
import './CartView.css';
import DeleteIcon from '@mui/icons-material/Delete';


export default function CartView({ item }) {  
  const { removeFromCart } = useContext(CartContext)

  return (
    <>
    <div id='cartViewContainer'>
            <div id='cartView'>
              <div id='cartInfo'>
              <button id='btnEliminar' onClick={() => removeFromCart(item.id)}><DeleteIcon /></button>
                <h6>{item.nombre}</h6>
                <span>{item.qty} unidades X ${item.precio}</span>
              </div>  
                <img src={item.imgURL} />
                
            </div>
    </div>
</>
  )
}