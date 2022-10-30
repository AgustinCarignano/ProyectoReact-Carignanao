import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Hola! Bienvenidos a mi proyecto de React."/>
    </div>
  );
}

export default App;
