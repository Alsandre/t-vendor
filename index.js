import { ProductCard } from "./web-component.js";
import { $, mainContentRender, toggleDisplay } from "./utility.js";
import { basketClickHandler, filteredRender } from "./event-handlers.js";

const basketBtn = $(".basket-button");
const backdrop = $("#backdrop");

backdrop.addEventListener("click", () => {
  toggleDisplay("#basket");
  toggleDisplay("#backdrop");
});

basketBtn.onclick = basketClickHandler;

const request = async () => {
  const res = await fetch(
    "https://tvendor-4db67-default-rtdb.europe-west1.firebasedatabase.app/productList.json"
  );
  const data = await res.json();
  let uniqueTagNames = [];
  data.forEach((element) => {
    // let listContainer = $("#menu");
    // let productCard = new ProductCard(
    //   element.productName,
    //   element.review,
    //   element.id,
    //   element.imageUrl,
    //   element.price
    // );
    // listContainer.appendChild(productCard);

    element.categoryTag.forEach((tagname) => {
      if (!uniqueTagNames.includes(tagname)) {
        uniqueTagNames.push(tagname);
      }
    });
    
  });
  mainContentRender(data);
  uniqueTagNames.forEach(element => {
    let menuItem = document.createElement('li');
    menuItem.textContent = element;
    menuItem.addEventListener('click', (e) => {
      filteredRender(e);
    });
    $('#side-menu').appendChild(menuItem)
  })
  localStorage.setItem("fresh-menu", JSON.stringify(data));
};

request();

let addBtn = $(".add-icon");
