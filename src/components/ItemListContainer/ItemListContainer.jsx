import React, { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { ClipLoader } from 'react-spinners';

export default function ItemListContainer() {
  
  const{idCat} = useParams(); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [resultado, setResultado] = useState([]);

  useEffect(() => {

    const db = getFirestore();
    const productsCollection = collection(db, 'items');

    if(idCat) {
      const q = query(productsCollection, where('category', '==', idCat));

      getDocs(q).then((snapshot) => {
        setResultado(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }).catch((error) =>{
      setError(error);
    }
    ).finally(() => {
      setLoading(false);
    });  
    } else {
      getDocs(productsCollection).then((snapshot) => {
        setResultado(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }).catch((error) =>{
      setError(error);
    }
    ).finally(() => {
      setLoading(false);
      }
    );  
  }
 }, [idCat]);

 const override = {
  display: "block",
  margin: "0 auto",
  justifyContent: "center",
  position: "relative",
};
  
return (<>
  <div id='loading'>
      <div id="loader">
        {loading ? <ClipLoader color={'#ffffff'} loading={loading} cssOverride={override} size={250} /> : <ItemList productos={resultado} />}
      </div>  
  </div>
  </>
)
}