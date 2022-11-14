import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemDetails/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer /* greeting="Elige tu producto y agregalo al carrito" *//>} />
          <Route path="/categorias/:cat" element={<ItemListContainer />} />
          <Route path="/productos/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<h1 style={{color: "white"}}>Ooops, no hay nada por aqui aun. El sitio se encuentra en construcción</h1>} />
          
          <Route path="*" element={<h1 style={{color: "white"}}>Error 404: La dirección que buscas no existe</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
