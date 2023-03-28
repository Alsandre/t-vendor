import {
  toggleDisplay,
  $,
  basketRender,
  mainContentRender,
  calculateTotal,
} from "./utility.js";

export function addToBasketHandler(id) {
  const amountField = $("#amount-field");
  const basket = $(".pot-icon");
  amountField.textContent =
    amountField.textContent === "" ? 1 : ++amountField.textContent;
  basket.style.animationName = "bump";
  setTimeout(() => {
    basket.style.animationName = "";
  }, 100);
  basketRender(id);
}

export function localStorageUpdateHandler(id) {
  let newBasket;
  let currentBasket = JSON.parse(localStorage.getItem("order-amount"));
  let currentPlant = JSON.parse(localStorage.getItem("fresh-menu")).find(
    (el) => `add-${el.id}` === id
  );
  if (currentBasket && currentBasket.length > 0) {
    let isPlantInCurrentBasket = currentBasket.find(
      (el) => `add-${el.id}` === id
    );
    if (isPlantInCurrentBasket) {
      newBasket = currentBasket.map((el) => {
        if (`add-${el.id}` === id) {
          return { ...el, amount: el.amount + 1 };
        } else return el;
      });
    } else {
      newBasket = [...currentBasket, { ...currentPlant, amount: 1 }];
    }
  } else {
    newBasket = [{ ...currentPlant, amount: 1 }];
  }
  localStorage.setItem("order-amount", JSON.stringify(newBasket));
}

export function basketClickHandler() {
  toggleDisplay("#basket");
  toggleDisplay("#backdrop");
  calculateTotal();
}

export function amountIncreaseHandler() {
  console.log("increase");
}

export function amountDecreaseHandler() {}

export function filteredRender(event) {
  let selectedTag = event.currentTarget.textContent;
  let renderList = JSON.parse(localStorage.getItem("fresh-menu")).filter(
    (element) => element.categoryTag.includes(selectedTag)
  );
  mainContentRender(renderList);
}
export function searchForNameHandler(event) {
  let menuArr = JSON.parse(localStorage.getItem("fresh-menu"));
  let renderArr = menuArr.filter((element) =>
    element.productName.toLowerCase().includes(event.target.value.toLowerCase())
  );
  mainContentRender(renderArr);
}

export function searchForTagHandler(event, searchIn, updateCallback) {
  console.log(event.target.value);
  let newTagList = searchIn.filter((element) =>
    element.includes(event.target.value)
  );
  updateCallback(newTagList);
}

export function clearTagHandler() {
  $("#selected-tagname").textContent = "";
  toggleDisplay(".clear-tagname", "inline-block");
  let menuArr = JSON.parse(localStorage.getItem("fresh-menu"));
  mainContentRender(menuArr);
}

export function onBasketClose() {
  toggleDisplay("#basket");
  toggleDisplay("#backdrop");
}

export function clearBasketHandler() {
  $(".basket-list").textContent = "";
  calculateTotal();
}
