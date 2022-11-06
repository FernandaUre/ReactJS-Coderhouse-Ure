import Box from '@mui/material/Box';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Navbar.css';
import {useContext, useState} from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartWidget() {

    const {getItemQty} = useContext(CartContext);

  return ( 
 <>
        <Link to="/cart" id='LinkCartWidget'><Box sx={{ flexGrow: 0 }} id="contadorBox">
            <ShoppingCartIcon id="cartIcon"/>
            {getItemQty() > 0 ? 
            <span id="contador">{getItemQty()}</span>
            : 
            null }
        </Box></Link>
 
 </>
 )
}
