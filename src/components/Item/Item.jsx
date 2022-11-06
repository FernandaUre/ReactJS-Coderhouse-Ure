import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Item.css';
import { Link } from 'react-router-dom';

export default function Item({ productos }) {
    
    const { nombre, precio, imgURL, id } = productos;

  return (
    <Card  id='cardDetail'>
      <CardMedia component="img" image={imgURL} id='cardImg'/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" id='cardTitle'>{nombre}</Typography>
      </CardContent>
      <CardActions>
        <Link to={`/item/${id}`} id='LinkBtn'><Button size="medium" id='btnCard'>COMPRAR</Button></Link>
      </CardActions>
    </Card>
  );
}


