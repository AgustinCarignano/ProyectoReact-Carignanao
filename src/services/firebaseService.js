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

export default async function getProducts() {
  const collectionRef = collection(dataBase, "data");
  const q = query(collectionRef, orderBy("index"));
  const documentSnapshot = await getDocs(q);
  const productsList = documentSnapshot.docs.map((item) => {
    const products = { ...item.data(), id: item.id };
    return products;
  });
  /* productsList.map((el) => {
    console.log(el.discount);
  }); */
  return productsList;
}

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

export async function getProductsInOffer() {
  const q = query(collection(dataBase, "data"), where("discount", ">", 0));
  const querySnapshot = await getDocs(q);
  const productsList = querySnapshot.docs.map((item) => {
    const products = { ...item.data(), id: item.id };
    return products;
  });
  return productsList;
}

/* export async function getProductsFiltered(valor) {
  const q = query(collection(dataBase, "data"), where("price", "<", valor));
  const querySnapshot = await getDocs(q);
  const productsList = querySnapshot.docs.map((item) => {
    const products = { ...item.data(), id: item.id };
    return products;
  });
  return productsList;
} */

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

export async function createOrder(order) {
  const collRef = collection(dataBase, "orders");
  const docOrder = await addDoc(collRef, order);
  return docOrder.id;
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
