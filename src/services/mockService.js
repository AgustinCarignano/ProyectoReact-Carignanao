import products from "../data/data";

function getProducts(categoria) {
  let listaProductos = [];
  if (categoria === undefined) {
    listaProductos = products;
  } else {
    listaProductos = products.filter((el) => el.category === categoria);
  }
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(listaProductos);
    }, 2000);
  });
}

export function getProduct(id) {
  return new Promise((resolve, reject) => {
    let item = products.find((el) => el.id === parseInt(id));
    if (item === undefined) reject("Item no encontrado");
    setTimeout(() => {
      resolve(item);
    }, 1500);
  });
}

export default getProducts;
