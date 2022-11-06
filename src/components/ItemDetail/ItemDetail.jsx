import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import './ItemDetail.css';
import { CartContext } from '../../context/CartContext';
import Typography from '@mui/material/Typography';
import Rating  from './Rating.jsx';
import { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';


 export default function ItemDetail({ productos }) {

  const [qty, setQty] = useState(1);
    const [mostrarCounter, setMostrarCounter] = useState(true)
    const { isInCart, addItem } = useContext(CartContext)
    
    const  onAdd = () => {
      Swal.fire(
        'Felicitaciones',
        'Sus productos fueron añadidos al carrito',
        'success'
      )
        setMostrarCounter(false)
        isInCart(productos.id)
        addItem(productos, qty)
        reinicio();
      }

     function reinicio() {
        setQty(1);
     }

    const { nombre, precio, imgURL, descripcion } = productos; 

  return (
  <>   
    <Card id='cardProductDetail' >
        <h3 id='cardproductTitle'>
            {nombre}
        </h3>
      <CardMedia component="img" image={imgURL} id='imgDetail' />
      <CardContent>
        <Typography variant="body2" color="text.secondary" id= 'descripcionText'>{descripcion}</Typography>
        <Rating id='ratingDetail'/>
        <Typography variant='h4' id='precioDetail'> $ {precio}</Typography>
        <div id='Contador'>
              { mostrarCounter ? <ItemCount qty={qty} setQty={setQty} stock={productos.stock} onAdd={onAdd} />
                               :
            <div id='divBtn'>
              <button id='btnSeguir'><Link className="LinkSeguir" to='/'>Seguir Comprando</Link></button>
              <button id='btnCarrito'><Link className="LinkCarrito" to='/cart'>Ir al carrito</Link></button>
          </div>
              }
        </div>
      </CardContent>
    </Card>
  </>  
  );
}
