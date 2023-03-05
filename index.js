import { ProductCard } from "./web-component.js";
import { $, calculateTotal, mainContentRender, tagListRender, toggleDisplay } from "./utility.js";
import { basketClickHandler, filteredRender, searchForTagHandler } from "./event-handlers.js";

export let uniqueTagNames = [];

const basketBtn = $(".basket-button");
const backdrop = $("#backdrop");
const basketClearBtn = $('#clear-basket');
const basketCloseBtn = $('#close-basket');
const tagSearchBar = $('#search-bar');
const nameSearchBar = $('#search-by-name');
const clearTagnameBtn = $('.clear-tagname');

nameSearchBar.oninput = (e) => {
  let menuArr = JSON.parse(localStorage.getItem('fresh-menu'));
  let renderArr = menuArr.filter(element => element.productName.toLowerCase().includes(e.target.value.toLowerCase()));
  mainContentRender(renderArr);
}

clearTagnameBtn.addEventListener('click', () => {
  $('#selected-tagname').textContent = '';
  toggleDisplay('.clear-tagname', 'inline-block');
  let menuArr = JSON.parse(localStorage.getItem('fresh-menu'));
  mainContentRender(menuArr);
})

tagSearchBar.oninput = (e) => searchForTagHandler(e, uniqueTagNames, tagListRender);

basketCloseBtn.onclick = () => {
  toggleDisplay("#basket");
  toggleDisplay("#backdrop");
};

basketClearBtn.onclick = () => {
  $('.basket-list').textContent = '';
  calculateTotal()
}

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
  tagListRender(uniqueTagNames)
  localStorage.setItem("fresh-menu", JSON.stringify(data));
};

request();

let addBtn = $(".add-icon");
