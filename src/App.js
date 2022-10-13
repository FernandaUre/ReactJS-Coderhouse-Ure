import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
        <Routes>
            <Route path='/' element={<ItemListContainer/>} />
            <Route path='/category/:idCat' element={<ItemListContainer/>} />
            <Route path='/item/:idProd' element={<ItemDetailContainer/>} />
        </Routes>
      <Footer />  
    </BrowserRouter>
    </>  
  );
}

export default App;
