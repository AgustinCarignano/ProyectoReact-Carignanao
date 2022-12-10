import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { CartContextProvider } from "./Contexts/cartContext";
import { FavContextProvider } from "./Contexts/favContext";
import { SearchContextProvider } from "./Contexts/searchContext";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetails/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import Favourites from "./components/Favourites/Favourites";
import Footer from "./components/Footer/Footer";
import OrderContainer from "./components/Order/OrderContainer";
import Checkout from "./components/Checkout/Checkout";
import Button from "./components/Button/Button";
import Tracing from "./components/Tracing/Tracing";
import "./App.css";

function App() {
  return (
    <CartContextProvider>
      <FavContextProvider>
        <SearchContextProvider>
          <BrowserRouter>
            <div className="App">
              <NavBar />
              <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route
                  path="/categorias/:cat"
                  element={<ItemListContainer />}
                />
                <Route
                  path="/productos/:id"
                  element={<ItemDetailContainer />}
                />
                <Route path="/favoritos" element={<Favourites />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/tracing" element={<Tracing />} />
                <Route
                  path="/pedidos/:orderParam"
                  element={<OrderContainer />}
                />

                <Route
                  path="*"
                  element={
                    <div>
                      <h1 style={{ color: "white" }}>
                        Error 404: Dirección no válida
                      </h1>
                      <Link to="/">
                        <Button text="Ir al home" />
                      </Link>
                    </div>
                  }
                />
              </Routes>
              <Footer />
            </div>
          </BrowserRouter>
        </SearchContextProvider>
      </FavContextProvider>
    </CartContextProvider>
  );
}

export default App;
