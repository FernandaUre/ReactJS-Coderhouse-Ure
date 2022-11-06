import React, { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail.jsx';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css'
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { ClipLoader } from 'react-spinners';

  export default function ItemDetailContainer() {
  
    const{idProd} = useParams(); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [resultado, setResultado] = useState([]);
  
    useEffect(() => {
      const db = getFirestore();
      const productRef = doc(db, 'items', idProd);
  
      getDoc(productRef).then((snapshot) => {
          setResultado({...snapshot.data(), id: snapshot.id });
      }).catch((error) => {
        setError(error);
      }
      ).finally(() => {
        setLoading(false);
      });
    }, [idProd]);
  
    const override = {
      display: "block",
      margin: "0 auto",
      justifyContent: "center",
      position: "relative",
    };
  
  
return (<>
  <div id='ItemDetailContainer'>
      <div id='Container'>
      {loading ? <ClipLoader color={'#ffffff'} loading={loading} cssOverride={override} size={250} /> : <ItemDetail productos={resultado} />}
      </div>
  </div>
  </>
)
}
