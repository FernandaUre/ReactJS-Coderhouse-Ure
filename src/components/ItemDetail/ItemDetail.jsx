import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import './ItemDetail.css';

import Typography from '@mui/material/Typography';
import Rating  from './Rating.jsx';

 export default function ItemDetail({ productos }) {
    const { nombre, precio, imgURL, descripcion } = productos; 

  return (
    <Card id='cardProductDetail' >
        <h3 id='cardproductTitle'>
            {nombre}
        </h3>
      <CardMedia component="img" image={imgURL} id='imgDetail' />
      <CardContent>
        <Typography variant="body2" color="text.secondary" id= 'descripcionText'>{descripcion}</Typography>
        <Rating id='ratingDetail'/>
        <Typography variant='h4' id='precioDetail'> $ {precio}</Typography>
        <Button id='btnComprar'>COMPRAR</Button>
      </CardContent>
    </Card>
  );
}
