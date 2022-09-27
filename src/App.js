import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';

function App() {
  const greetings = "Hola, buenas tardes"; 
  return (
    <>
    <Navbar />
    <ItemListContainer greetings={greetings}/>
    </>  
  );
}

export default App;
