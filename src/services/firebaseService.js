import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  addDoc,
  orderBy,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAuyh3RwwOh7ZxDQVUNBQR4tRK0EfL6QLQ",
  authDomain: "tyrion-2b73f.firebaseapp.com",
  projectId: "tyrion-2b73f",
  storageBucket: "tyrion-2b73f.appspot.com",
  messagingSenderId: "652079332928",
  appId: "1:652079332928:web:4fefb5d755a93e10d5e9a5",
};

const app = initializeApp(firebaseConfig);
const dataBase = getFirestore(app);

//función para obtener los productos de firestore, ordenados según index
export default async function getProducts() {
  const collectionRef = collection(dataBase, "data");
  const q = query(collectionRef, orderBy("index"));
  const documentSnapshot = await getDocs(q);
  const productsList = documentSnapshot.docs.map((item) => {
    const products = { ...item.data(), id: item.id };
    return products;
  });
  return productsList;
}

//función para obtener detalles de un item, sea de la colección "data" para itemDetail o de "order" para ver el estado
export async function getProduct(id, coll) {
  let docRef;
  coll === "data" && (docRef = doc(dataBase, "data", id));
  coll === "orders" && (docRef = doc(dataBase, "orders", id));
  const docSnapshot = await getDoc(docRef);
  if (docSnapshot.data()) {
    const itemData = { ...docSnapshot.data(), id: docSnapshot.id };
    return itemData;
  } else {
    return console.error("Los datos requeridos no son validos");
  }
}

//Función para obtener los productos según la cetogoría buscada
export async function getProductsByCategory(idCategory) {
  const q = query(
    collection(dataBase, "data"),
    where("category", "==", idCategory)
  );
  const querySnapshot = await getDocs(q);
  const productsList = querySnapshot.docs.map((item) => {
    const products = { ...item.data(), id: item.id };
    return products;
  });
  return productsList;
}

//Función para obtener los productos en oferta, con la propiedad "discount" mayor a cero
export async function getProductsInOffer() {
  const q = query(collection(dataBase, "data"), where("discount", ">", 0));
  const querySnapshot = await getDocs(q);
  const productsList = querySnapshot.docs.map((item) => {
    const products = { ...item.data(), id: item.id };
    return products;
  });
  return productsList;
}

//Función para obtener los productos que coincidan con la búsqueda realizada.
export async function getSearchedItems(searchedWord) {
  const allProducts = await getProducts();
  let productsSearched;
  if (searchedWord.lenght === 0) {
    productsSearched = allProducts;
  } else {
    searchedWord = searchedWord.trim().toLowerCase();
    productsSearched = allProducts.filter((item) =>
      item.title.toLowerCase().includes(searchedWord)
    );
  }
  return productsSearched;
}

//Función para cargar a la colección "order" los datos de la compra realizada
export async function createOrder(order) {
  const collRef = collection(dataBase, "orders");
  const docOrder = await addDoc(collRef, order);
  return docOrder.id;
}

//Función para obtener una lista de ordenes que se hayan realizado con el mismo email de comprador
export async function getOrderByBuyer(email) {
  const q = query(
    collection(dataBase, "orders"),
    where("buyer.email", "==", email)
  );
  const docSnapshot = await getDocs(q);
  if (docSnapshot.docs.length !== 0) {
    const productsList = docSnapshot.docs.map((item) => {
      const products = { ...item.data(), id: item.id };
      return products;
    });
    return productsList;
  } else {
    return console.error("Los datos requeridos no son validos");
  }
}

//Funcion utilizada para cargar productos a la base de datos
/* async function uploadProducts() {
  const collectionRef = collection(dataBase, "data");
  for (const i of products) {
    i.index = i.id;
    delete i.id;
    let docData = await addDoc(collectionRef, i);
    console.log(docData.id);
  }
} */
