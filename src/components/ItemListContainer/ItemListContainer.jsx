import React, { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';


// id: '1', category: 'deportivos', nombre: 'Lexus IS350 F Sport', color: 'Blanco', precio: '180', imgURL: ''

let productosMock = [
  {id: '5', category: 'zapatillas', nombre: 'Nike Dunk High premium', precio: '140', imgURL: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/145d72ce-fb48-4d0c-82bf-8f32ca01532d/dunk-high-premium-womens-shoes-ZhkMvb.png'},
  {id: '4', category: 'buzos', nombre: 'Mens Pullover Basketball Hoodie', precio: '100', imgURL: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3f0cc403-28a4-4800-99cc-f751028f4328/kyrie-mens-pullover-basketball-hoodie-gvFW6n.png'},
  {id: '12', category: 'gorras', nombre: 'Nike College Classic UCLA', precio: '30', imgURL: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/bc9a2637-01d6-4417-9ad4-943641358e66/classic99-lsu-adjustable-trucker-hat-PrtNbJ.png'},
  {id: '8', category: 'zapatillas', nombre: 'Nike Flex Experience Run', precio: '70', imgURL: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b773f81d-8235-4aa5-b71e-7ab3413b3b1d/flex-experience-run-11-next-nature-womens-road-running-shoes-7RhWR5.png'},
  {id: '1', category: 'buzos', nombre: 'Nike Forward Crew', precio: '130', imgURL: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/edc506ff-3c5c-4dd1-8a78-fd297e69e630/forward-crew-mens-crew-C7Nfc6.png'},
  {id: '9', category: 'gorras', nombre: 'Nike College Classic Blue', precio: '30', imgURL: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0a18ee72-d085-4b67-b734-101b51f2e9b0/classic99-unc-adjustable-trucker-hat-PrtNbJ.png'},  
  {id: '6', category: 'zapatillas', nombre: 'Jordan 5 Retro', precio: '90', imgURL: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4ccaf196-da68-4f27-bb22-32fc2d4059fd/jordan-5-retro-little-kids-shoes-5LH7vx.png'},
  {id: '2', category: 'buzos', nombre: 'Nike Sportswear Club Fleece', precio: '70', imgURL: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/066d73e2-3967-4b31-ba65-708d4b58fc41/sportswear-club-fleece-womens-funnel-neck-hoodie-8MR6lM.png'},
  {id: '11', category: 'gorras', nombre: 'Nike Dri-FIT Woods Legacy91', precio: '37', imgURL: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f3e67c3c-63d3-4520-9a11-eeb39b4f3b72/dri-fit-tiger-woods-legacy91-golf-hat-dvkPv4.png'},
  {id: '7', category: 'zapatillas', nombre: 'Nike Zoomblader', precio: '105', imgURL: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f5f0ddec-6894-4063-9d90-e10480919f4f/sb-zoom-blazer-mid-prm-skate-shoes-S2lDDj.png'},
  {id: '3', category: 'buzos', nombre: 'Nike Sportswear Club Fleece White Edition', precio: '70', imgURL: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/03c8e09e-374f-467b-a457-6af90d2d02ce/sportswear-club-fleece-womens-funnel-neck-hoodie-8MR6lM.png'},
  {id: '10', category: 'gorras', nombre: 'Nike College Classic USC', precio: '30', imgURL: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/bb2ebc32-5b75-4659-8a11-29344424eb89/classic99-usc-adjustable-trucker-hat-vHnH4q.png'},
];

export default function ItemListContainer() {
  
  const{idCat} = useParams(); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [resultado, setResultado] = useState([]);

  useEffect(()=>{
  const productos = new Promise((res, rej) => {
      setResultado ([]);
      setLoading(true);
      setError(false);
      
    setTimeout(() => {

      (!idCat) ? res(productosMock) : res(productosMock.filter(item => item.category==idCat));
    }, 500);
  });

  productos
  .then((result) =>{
    setResultado(result);
  })
  .catch((error) => {
    setError(true);
    console.log(error);
  })
  .finally(() => {
    setLoading(false);
  });   

}, [idCat]);

console.log(resultado);
  
return (<>
  <div id='loading'>{loading && 'Loading...'}</div>
  <div>{error && 'Hubo un error inesperado'}</div>
  <div>
      <ItemList productos={resultado} />
  </div>
  </>
)
}