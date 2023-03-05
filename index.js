import { ProductCard } from "./web-component.js";
import { $, toggleDisplay } from "./utility.js";
import { basketClickHandler } from "./event-handlers.js";

const basketBtn = $('.basket-button');
const backdrop = $('#backdrop');

backdrop.addEventListener('click', () => {
  toggleDisplay('#basket');
  toggleDisplay('#backdrop')
})

basketBtn.onclick = basketClickHandler;

const request = async () => {
  const res = await fetch(
    "https://tvendor-4db67-default-rtdb.europe-west1.firebasedatabase.app/productList.json"
  );
  const data = await res.json();
  let senquota = [];
  data[Object.keys(data)[0]].forEach((element) => {
    let listContainer = $("#menu");
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
    for(let i=0; i<4; i++){
      let newObj = {...element, id: `${element.id}_${i}`};
      senquota.push(newObj);
    }
  });
  
  localStorage.setItem('fresh-menu', JSON.stringify(data[Object.keys(data)[0]]))
};

request();

let addBtn = $('.add-icon');

