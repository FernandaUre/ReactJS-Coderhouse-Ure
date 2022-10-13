import React from 'react'
import Item from '../Item/Item'
import './ItemList.css';

export default function ItemList({ productos }) {
  return (
    <div id='ItemList'>
                {productos?.map(productos => <Item  key={productos.id} productos={productos}/>)}
    </div>
  )
}
