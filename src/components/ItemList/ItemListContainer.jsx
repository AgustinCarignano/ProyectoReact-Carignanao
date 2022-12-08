import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { searchContext } from "../../Contexts/searchContext";
import ItemList from "./ItemList";
import Loader from "../Loader/Loader";
import Button from "../Button/Button";
import getProducts, {
  getProductsByCategory,
  getProductsInOffer,
  getSearchedItems,
} from "../../services/firebaseService";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [resultOfSearch, setResultOfSearch] = useState(true);
  const { cat } = useParams();
  const { searchWord, newSearch } = useContext(searchContext);
  const [showBanner, setShowBanner] = useState(false);

  async function getItems() {
    let respuesta;
    if (!cat) {
      respuesta = await getProducts();
      setShowBanner(true);
    } else if (cat == "ofertas") {
      respuesta = await getProductsInOffer();
      setShowBanner(false);
    } else if (cat == "busqueda") {
      // respuesta = productsSearched;
      respuesta = await getSearchedItems(searchWord);
      setShowBanner(false);
      respuesta.length === 0
        ? setResultOfSearch(false)
        : setResultOfSearch(true);
    } else {
      respuesta = await getProductsByCategory(cat);
      setShowBanner(false);
    }
    setProducts(respuesta);
  }

  useEffect(() => {
    getItems();
  }, [cat, newSearch]);

  if (resultOfSearch) {
    return products.length === 0 ? (
      <Loader />
    ) : (
      <ItemList products={products} banner={showBanner} />
    );
  } else {
    return (
      <div className="searchError">
        <h3>Ningun producto concuerda con los términos de la búsqueda</h3>
        <h5>Vuelva a intentarlo o regrese al Home</h5>
        <Link to="/">
          <Button
            text="Volver al inicio"
            onClick={() => setResultOfSearch(true)}
          />
        </Link>
      </div>
    );
  }
}

export default ItemListContainer;
