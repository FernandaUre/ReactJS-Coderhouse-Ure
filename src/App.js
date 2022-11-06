import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';
import { initializeApp } from "firebase/app";
import CartProvider  from './context/CartContext.jsx';
import Checkout from './components/Checkout/Checkout';
import Cart from './components/Cart/Cart';


function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyD5w5zpTA0EKDC1NEYQOAf7vgXBu4nAyro",
    authDomain: "ferchuure-no-hace-la-tarea.firebaseapp.com",
    projectId: "ferchuure-no-hace-la-tarea",
    storageBucket: "ferchuure-no-hace-la-tarea.appspot.com",
    messagingSenderId: "923651655063",
    appId: "1:923651655063:web:d7bc6b335b19ea1360b0d2"
  };
  
  initializeApp(firebaseConfig);



  return (
    <>
    <BrowserRouter>
      <CartProvider>
        <Navbar />
          <Routes>
              <Route path='/' element={<ItemListContainer/>} />
              <Route path='/category/:idCat' element={<ItemListContainer/>} />
              <Route path='/item/:idProd' element={<ItemDetailContainer/>} />
              <Route path='/cart' element={<Cart />} /> 
              <Route path='/checkout' element={<Checkout />} />
          </Routes>
        <Footer />  
      </CartProvider>  
    </BrowserRouter>
    </>  
  );
}

export default App;
