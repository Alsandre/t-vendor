import { ProductCard } from "./web-component.js";

// let product1 = {
//     id: '',
//     description: '',
//     title: '',
//     price: '',
//     tag: []
// };

// class Product {
//     constructor(id, description, title, price){
//         this.id = id;
//         this.description = description;
//         this.title = title;
//         this.name = name;
//         this.price = price;
//         this.tag = tag;
//     }
//     clickHandler
// }

// Create a class for the element

const request = async () => {
  const res = await fetch(
    "https://tvendor-4db67-default-rtdb.europe-west1.firebasedatabase.app/productList.json"
  );
  const data = await res.json();
  data[Object.keys(data)[0]].forEach((element) => {
    let listContainer = document.querySelector("#menu");
    let productCard = new ProductCard(
      element.productName,
      element.review,
      element.id,
      element.imageUrl,
      element.price
    );

    //    productCard.setAttribute('product-name', element.productName);
    //    productCard.setAttribute('image-url', element.imageUrl);
    //    productCard.setAttribute('description', element.review);
    listContainer.appendChild(productCard);
  });
};

request();

let addBtn = document.querySelector('.add-icon');
console.log(addBtn)