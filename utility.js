import { amountDecreaseHandler, amountIncreaseHandler } from "./event-handlers.js";
import { ProductCard } from "./web-component.js";

export function $(selector) {
  return document.querySelector(selector);
}
export function toggleDisplay(selector, type = "block") {
  let element = $(selector);
  let display = window.getComputedStyle(element);
  element.style.display = display.display === "none" ? type : "none";
}

export function basketRender(id) {
    let productId = id.replace('add-', '');
    let basketItemId = `basket-${productId}`;
    let isInBasket = !!$(`#${basketItemId}`);
  if (isInBasket) {
    // update existing entry
    updateBasketEntry(basketItemId)
  } else {
    
      let currentProduct = JSON.parse(localStorage.getItem('fresh-menu')).find(el => el.id === productId);
      let productName = currentProduct.productName;
      let productPrice = currentProduct.price;
      let orderAmount = 1;
      let newEntry = createBasketEntry(basketItemId, productName, productPrice, orderAmount);
    $(".basket-list").appendChild(newEntry);
  }
}

function createBasketEntry(id, name, price, amount) {
  let listEntry = document.createElement("li");
  listEntry.classList.add('basket-item');
  listEntry.setAttribute('id', id);
  
  let nameSpan = document.createElement("span");
  nameSpan.textContent = name;
  nameSpan.classList.add('basket-product-name');

  let priceSpan = document.createElement("span");
  priceSpan.textContent = price;
  priceSpan.classList.add('basket-product-price');

//   let timesSpan = document.createElement("span");
//   timesSpan.textContent = 'x';

  let amountSpan = document.createElement("span");
  amountSpan.textContent = amount;
  amountSpan.classList.add('basket-product-amount');

//   let equalsSpan = document.createElement("span");
//   equalsSpan.textContent = '=';

  let sumSpan = document.createElement("span");
  sumSpan.textContent = price*amount;
  sumSpan.classList.add('basket-product-sum');

  let minusBtn = document.createElement("button");
  minusBtn.textContent = '-';
  minusBtn.onclick = () => updateBasketEntry(id, 'SUBTRACTION');
  minusBtn.classList.add('remove-button');

  let plusBtn = document.createElement("button");
  plusBtn.textContent = '+';
  plusBtn.onclick = () => updateBasketEntry(id, 'ADDITION');
  plusBtn.classList.add('add-button');

  listEntry.appendChild(nameSpan);
  listEntry.appendChild(priceSpan);
//   listEntry.appendChild(timesSpan);
  listEntry.appendChild(amountSpan);
//   listEntry.appendChild(equalsSpan);
  listEntry.appendChild(sumSpan);
  listEntry.appendChild(minusBtn);
  listEntry.appendChild(plusBtn);

  return listEntry;
}

function updateBasketEntry(id, operation = 'ADDITION') {
    let amountField = $(`#${id} span.basket-product-amount`);
    let sumField = $(`#${id} span.basket-product-sum`);
    let priceField = $(`#${id} span.basket-product-price`);
    let currentAmount = amountField.textContent;
    let currentSum = sumField.textContent;
    switch(operation) {
        case 'ADDITION':
            amountField.textContent = ++currentAmount;
            sumField.textContent = (+sumField.textContent+(+priceField.textContent)).toFixed(2);
            break;
        case 'SUBTRACTION':
            if(+amountField.textContent === 1){
                $(`#${id}`).remove();
            }
            amountField.textContent = --currentAmount;
            sumField.textContent = (+sumField.textContent-(+priceField.textContent)).toFixed(2);
    }
    // console.log(typeof +sumField.textContent, +sumField.textContent)
}

export function mainContentRender (arr) {
  $('#menu').innerHTML = '';
  arr.forEach((element) => {
    let listContainer = $("#menu");
    let productCard = new ProductCard(
      element.productName,
      element.review,
      element.id,
      element.imageUrl,
      element.price
    );
    listContainer.appendChild(productCard);

    
  });
}