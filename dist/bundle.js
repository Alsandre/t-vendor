/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./event-handlers.js":
/*!***************************!*\
  !*** ./event-handlers.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addToBasketHandler\": () => (/* binding */ addToBasketHandler),\n/* harmony export */   \"amountDecreaseHandler\": () => (/* binding */ amountDecreaseHandler),\n/* harmony export */   \"amountIncreaseHandler\": () => (/* binding */ amountIncreaseHandler),\n/* harmony export */   \"basketClickHandler\": () => (/* binding */ basketClickHandler),\n/* harmony export */   \"clearBasketHandler\": () => (/* binding */ clearBasketHandler),\n/* harmony export */   \"clearTagHandler\": () => (/* binding */ clearTagHandler),\n/* harmony export */   \"filteredRender\": () => (/* binding */ filteredRender),\n/* harmony export */   \"localStorageUpdateHandler\": () => (/* binding */ localStorageUpdateHandler),\n/* harmony export */   \"onBasketClose\": () => (/* binding */ onBasketClose),\n/* harmony export */   \"searchForNameHandler\": () => (/* binding */ searchForNameHandler),\n/* harmony export */   \"searchForTagHandler\": () => (/* binding */ searchForTagHandler)\n/* harmony export */ });\n/* harmony import */ var _utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility.js */ \"./utility.js\");\n\r\n\r\nfunction addToBasketHandler(id) {\r\n  const amountField = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.$)(\"#amount-field\");\r\n  const basket = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.$)(\".pot-icon\");\r\n  amountField.textContent =\r\n    amountField.textContent === \"\" ? 1 : ++amountField.textContent;\r\n  basket.style.animationName = \"bump\";\r\n  setTimeout(() => {\r\n    basket.style.animationName = \"\";\r\n  }, 100);\r\n  (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.basketRender)(id);\r\n}\r\n\r\nfunction localStorageUpdateHandler(id) {\r\n  let newBasket;\r\n  let currentBasket = JSON.parse(localStorage.getItem(\"order-amount\"));\r\n  let currentPlant = JSON.parse(localStorage.getItem(\"fresh-menu\")).find(\r\n    (el) => `add-${el.id}` === id\r\n  );\r\n  if (currentBasket && currentBasket.length > 0) {\r\n    let isPlantInCurrentBasket = currentBasket.find(\r\n      (el) => `add-${el.id}` === id\r\n    );\r\n    if (isPlantInCurrentBasket) {\r\n      newBasket = currentBasket.map((el) => {\r\n        if (`add-${el.id}` === id) {\r\n          return { ...el, amount: el.amount + 1 };\r\n        } else return el;\r\n      });\r\n    } else {\r\n      newBasket = [...currentBasket, { ...currentPlant, amount: 1 }];\r\n    }\r\n  } else {\r\n    newBasket = [{ ...currentPlant, amount: 1 }];\r\n  }\r\n  localStorage.setItem(\"order-amount\", JSON.stringify(newBasket));\r\n}\r\n\r\nfunction basketClickHandler() {\r\n  (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.toggleDisplay)(\"#basket\");\r\n  (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.toggleDisplay)(\"#backdrop\");\r\n  (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.calculateTotal)();\r\n}\r\n\r\nfunction amountIncreaseHandler() {\r\n  console.log(\"increase\");\r\n}\r\n\r\nfunction amountDecreaseHandler() {}\r\n\r\nfunction filteredRender(event) {\r\n  let selectedTag = event.currentTarget.textContent;\r\n  let renderList = JSON.parse(localStorage.getItem(\"fresh-menu\")).filter(\r\n    (element) => element.categoryTag.includes(selectedTag)\r\n  );\r\n  (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.mainContentRender)(renderList);\r\n}\r\nfunction searchForNameHandler(event) {\r\n  let menuArr = JSON.parse(localStorage.getItem(\"fresh-menu\"));\r\n  let renderArr = menuArr.filter((element) =>\r\n    element.productName.toLowerCase().includes(event.target.value.toLowerCase())\r\n  );\r\n  (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.mainContentRender)(renderArr);\r\n}\r\n\r\nfunction searchForTagHandler(event, searchIn, updateCallback) {\r\n  console.log(event.target.value);\r\n  let newTagList = searchIn.filter((element) =>\r\n    element.includes(event.target.value)\r\n  );\r\n  updateCallback(newTagList);\r\n}\r\n\r\nfunction clearTagHandler() {\r\n  (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.$)(\"#selected-tagname\").textContent = \"\";\r\n  (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.toggleDisplay)(\".clear-tagname\", \"inline-block\");\r\n  let menuArr = JSON.parse(localStorage.getItem(\"fresh-menu\"));\r\n  (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.mainContentRender)(menuArr);\r\n}\r\n\r\nfunction onBasketClose() {\r\n  (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.toggleDisplay)(\"#basket\");\r\n  (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.toggleDisplay)(\"#backdrop\");\r\n}\r\n\r\nfunction clearBasketHandler() {\r\n  (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.$)(\".basket-list\").textContent = \"\";\r\n  (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.calculateTotal)();\r\n}\r\n\n\n//# sourceURL=webpack://tvendor/./event-handlers.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"uniqueTagNames\": () => (/* binding */ uniqueTagNames)\n/* harmony export */ });\n/* harmony import */ var _utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility.js */ \"./utility.js\");\n/* harmony import */ var _event_handlers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-handlers.js */ \"./event-handlers.js\");\n/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./request.js */ \"./request.js\");\n\r\n\r\n\r\n\r\nlet uniqueTagNames = [];\r\n\r\nconst basketBtn = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.$)(\".basket-button\");\r\nconst backdrop = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.$)(\"#backdrop\");\r\nconst basketClearBtn = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.$)(\"#clear-basket\");\r\nconst basketCloseBtn = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.$)(\"#close-basket\");\r\nconst tagSearchBar = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.$)(\"#search-bar\");\r\nconst nameSearchBar = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.$)(\"#search-by-name\");\r\nconst clearTagnameBtn = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.$)(\".clear-tagname\");\r\n\r\nnameSearchBar.oninput = (event) => (0,_event_handlers_js__WEBPACK_IMPORTED_MODULE_1__.searchForNameHandler)(event);\r\n\r\nclearTagnameBtn.onclick = _event_handlers_js__WEBPACK_IMPORTED_MODULE_1__.clearTagHandler;\r\n\r\ntagSearchBar.oninput = (e) =>\r\n  (0,_event_handlers_js__WEBPACK_IMPORTED_MODULE_1__.searchForTagHandler)(e, uniqueTagNames, _utility_js__WEBPACK_IMPORTED_MODULE_0__.tagListRender);\r\n\r\nbasketCloseBtn.onclick = _event_handlers_js__WEBPACK_IMPORTED_MODULE_1__.onBasketClose;\r\n\r\nbasketClearBtn.onclick = _event_handlers_js__WEBPACK_IMPORTED_MODULE_1__.clearBasketHandler;\r\n\r\nbackdrop.onclick = _event_handlers_js__WEBPACK_IMPORTED_MODULE_1__.onBasketClose;\r\n\r\nbasketBtn.onclick = _event_handlers_js__WEBPACK_IMPORTED_MODULE_1__.basketClickHandler;\r\n\r\n(0,_request_js__WEBPACK_IMPORTED_MODULE_2__.requestData)(uniqueTagNames);\r\n\r\n\n\n//# sourceURL=webpack://tvendor/./index.js?");

/***/ }),

/***/ "./request.js":
/*!********************!*\
  !*** ./request.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"requestData\": () => (/* binding */ requestData)\n/* harmony export */ });\n/* harmony import */ var _utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility.js */ \"./utility.js\");\n\r\n\r\nconst requestData = async (tagList) => {\r\n  const res = await fetch(\r\n    \"https://tvendor-4db67-default-rtdb.europe-west1.firebasedatabase.app/productList.json\"\r\n  );\r\n  const data = await res.json();\r\n  data.forEach((element) => {\r\n    element.categoryTag.forEach((tagname) => {\r\n      if (!tagList.includes(tagname)) {\r\n        tagList.push(tagname);\r\n      }\r\n    });\r\n  });\r\n  (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.mainContentRender)(data);\r\n  (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.tagListRender)(tagList);\r\n  localStorage.setItem(\"fresh-menu\", JSON.stringify(data));\r\n};\r\n\n\n//# sourceURL=webpack://tvendor/./request.js?");

/***/ }),

/***/ "./utility.js":
/*!********************!*\
  !*** ./utility.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"$\": () => (/* binding */ $),\n/* harmony export */   \"basketRender\": () => (/* binding */ basketRender),\n/* harmony export */   \"calculateTotal\": () => (/* binding */ calculateTotal),\n/* harmony export */   \"mainContentRender\": () => (/* binding */ mainContentRender),\n/* harmony export */   \"tagListRender\": () => (/* binding */ tagListRender),\n/* harmony export */   \"toggleDisplay\": () => (/* binding */ toggleDisplay)\n/* harmony export */ });\n/* harmony import */ var _event_handlers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-handlers.js */ \"./event-handlers.js\");\n/* harmony import */ var _web_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web-component.js */ \"./web-component.js\");\n\r\n\r\n\r\nfunction $(selector) {\r\n  return document.querySelector(selector);\r\n}\r\nfunction toggleDisplay(selector, type = \"block\") {\r\n  let element = $(selector);\r\n  let display = window.getComputedStyle(element);\r\n  element.style.display = display.display === \"none\" ? type : \"none\";\r\n}\r\n\r\nfunction basketRender(id) {\r\n    let productId = id.replace('add-', '');\r\n    let basketItemId = `basket-${productId}`;\r\n    let isInBasket = !!$(`#${basketItemId}`);\r\n  if (isInBasket) {\r\n    // update existing entry\r\n    updateBasketEntry(basketItemId)\r\n  } else {\r\n    \r\n      let currentProduct = JSON.parse(localStorage.getItem('fresh-menu')).find(el => el.id === productId);\r\n      let productName = currentProduct.productName;\r\n      let productPrice = currentProduct.price;\r\n      let orderAmount = 1;\r\n      let newEntry = createBasketEntry(basketItemId, productName, productPrice, orderAmount);\r\n    $(\".basket-list\").appendChild(newEntry);\r\n  }\r\n}\r\n\r\nfunction createBasketEntry(id, name, price, amount) {\r\n  let listEntry = document.createElement(\"li\");\r\n  listEntry.classList.add('basket-item');\r\n  listEntry.setAttribute('id', id);\r\n  \r\n  let nameSpan = document.createElement(\"span\");\r\n  nameSpan.textContent = name;\r\n  nameSpan.classList.add('basket-product-name');\r\n\r\n  let priceSpan = document.createElement(\"span\");\r\n  priceSpan.textContent = price;\r\n  priceSpan.classList.add('basket-product-price');\r\n\r\n//   let timesSpan = document.createElement(\"span\");\r\n//   timesSpan.textContent = 'x';\r\n\r\n  let amountSpan = document.createElement(\"span\");\r\n  amountSpan.textContent = amount;\r\n  amountSpan.classList.add('basket-product-amount');\r\n\r\n//   let equalsSpan = document.createElement(\"span\");\r\n//   equalsSpan.textContent = '=';\r\n\r\n  let sumSpan = document.createElement(\"span\");\r\n  sumSpan.textContent = price*amount;\r\n  sumSpan.classList.add('basket-product-sum');\r\n\r\n  let minusBtn = document.createElement(\"button\");\r\n  minusBtn.textContent = '-';\r\n  minusBtn.onclick = () => updateBasketEntry(id, 'SUBTRACTION');\r\n  minusBtn.classList.add('remove-button');\r\n\r\n  let plusBtn = document.createElement(\"button\");\r\n  plusBtn.textContent = '+';\r\n  plusBtn.onclick = () => updateBasketEntry(id, 'ADDITION');\r\n  plusBtn.classList.add('add-button');\r\n\r\n  listEntry.appendChild(nameSpan);\r\n  listEntry.appendChild(priceSpan);\r\n//   listEntry.appendChild(timesSpan);\r\n  listEntry.appendChild(amountSpan);\r\n//   listEntry.appendChild(equalsSpan);\r\n  listEntry.appendChild(sumSpan);\r\n  listEntry.appendChild(minusBtn);\r\n  listEntry.appendChild(plusBtn);\r\n\r\n  return listEntry;\r\n}\r\n\r\nfunction updateBasketEntry(id, operation = 'ADDITION') {\r\n    let amountField = $(`#${id} span.basket-product-amount`);\r\n    let sumField = $(`#${id} span.basket-product-sum`);\r\n    let priceField = $(`#${id} span.basket-product-price`);\r\n    let currentAmount = amountField.textContent;\r\n    let currentSum = sumField.textContent;\r\n    switch(operation) {\r\n        case 'ADDITION':\r\n            amountField.textContent = ++currentAmount;\r\n            sumField.textContent = (+sumField.textContent+(+priceField.textContent)).toFixed(2);\r\n            break;\r\n        case 'SUBTRACTION':\r\n            if(+amountField.textContent === 1){\r\n                $(`#${id}`).remove();\r\n            }\r\n            amountField.textContent = --currentAmount;\r\n            sumField.textContent = (+sumField.textContent-(+priceField.textContent)).toFixed(2);\r\n    }\r\n    calculateTotal();    \r\n}\r\n\r\nfunction mainContentRender (arr) {\r\n  $('#menu').innerHTML = '';\r\n  arr.forEach((element) => {\r\n    let listContainer = $(\"#menu\");\r\n    let productCard = new _web_component_js__WEBPACK_IMPORTED_MODULE_1__.ProductCard(\r\n      element.productName,\r\n      element.review,\r\n      element.id,\r\n      element.imageUrl,\r\n      element.price\r\n    );\r\n    listContainer.appendChild(productCard);\r\n  });\r\n}\r\n\r\nfunction tagListRender (arr) {\r\n  $('#side-menu').innerHTML = '';\r\n  arr.forEach(element => {\r\n    let menuItem = document.createElement('li');\r\n    menuItem.textContent = element;\r\n    menuItem.addEventListener('click', (e) => {\r\n      $('#selected-tagname').textContent = e.currentTarget.textContent;\r\n      let clearbtn = $('.clear-tagname');\r\n      let clearbtnmode = window.getComputedStyle(clearbtn);\r\n      clearbtnmode.display === 'none' ? toggleDisplay('.clear-tagname', 'inline-block') : ''\r\n      ;(0,_event_handlers_js__WEBPACK_IMPORTED_MODULE_0__.filteredRender)(e);\r\n    });\r\n    $('#side-menu').appendChild(menuItem);\r\n  });\r\n}\r\n\r\nfunction calculateTotal () {\r\n  let total = 0;\r\n  let list = document.querySelectorAll('.basket-list .basket-product-sum');\r\n  console.log(list)\r\n  list.forEach(element => {\r\n    let elementValue = +element.textContent;\r\n    total += elementValue;    \r\n  })\r\n\r\n  $('#basket-total').textContent = total.toFixed(2);\r\n\r\n}\n\n//# sourceURL=webpack://tvendor/./utility.js?");

/***/ }),

/***/ "./web-component-styles.js":
/*!*********************************!*\
  !*** ./web-component-styles.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"productCardStyles\": () => (/* binding */ productCardStyles)\n/* harmony export */ });\nconst productCardStyles = `\r\n:host {\r\n    display: block;\r\n}\r\n.card-container {\r\n  box-sizing: border-box;\r\n    width: 170px;\r\n    height: 260px;\r\n    margin: 2rem auto;\r\n    background: url(./assets/deco-card.png);\r\n    background-size: 100%;\r\n    position: relative;\r\n    padding-top: 30px;\r\n  }\r\n\r\n  .name {\r\n    margin-block-end: 0;\r\n    margin-block-start: 0;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    line-height: 20px;\r\n    font-style: italic;\r\n  }\r\n  .price-badge {\r\n    background-color: rgba(193, 202, 194, 0.6);\r\n    border-radius: 50%;\r\n    overflow: hidden;\r\n    position: absolute;\r\n    top: 0;\r\n    right: -0.5em; \r\n    transform: translate(50%); \r\n    display: none;\r\n  }\r\n  .price-whole {\r\n    font-family: 'Lobster', cursive;\r\n    display: block;\r\n    width: 40px;\r\n    padding: 0.3rem 0 0 0;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    background-color: rgba(255, 202, 92);\r\n    border-bottom: 1px solid #ccc;\r\n  }\r\n  .price-change {\r\n    font-family: 'Lobster', cursive;\r\n    display: block;\r\n    width: 40px;\r\n    padding: 0.1rem 0 0.3rem 0;\r\n    text-align: center;\r\n    font-style: italic;\r\n    font-size: 0.7em;\r\n    background-color: rgba(122, 175, 136, 1);\r\n  }\r\n  .add-icon {\r\n    background-color: rgba(193, 202, 194, 0.6);\r\n    padding: 0.1em;\r\n    border-bottom-left-radius: 10px;\r\n    border-top-right-radius: 4px;\r\n    border-bottom-right-radius: 4px;\r\n    text-align: center;\r\n    color: #333;\r\n    position: absolute;\r\n    top: 50px;\r\n    right: -0.5em; \r\n    transform: translate(50%); \r\n    transition: all 0.2s;\r\n    display: none;\r\n  }\r\n  .plus-sign {\r\n    // display: block;\r\n    font-family: courier;\r\n    font-weight: bold;\r\n    font-size: 20px;\r\n    line-height: 15px;\r\n    padding: 0;\r\n    margin: 0;\r\n  }\r\n  .add-badge {\r\n    font-size: 14px;\r\n    line-height: 10px;\r\n    font-family: courier;\r\n    margin: 0;\r\n  }\r\n  \r\n  .add-icon:hover {\r\n    background-color: rgba(193, 202, 194, 1);\r\n    border: 1px solid rgba(255, 202, 92);\r\n    cursor: pointer;\r\n  }\r\n\r\n  .image-frame {\r\n    width: 136px;\r\n    height: 115px;\r\n    margin: auto;\r\n  }\r\n  .image-frame img {\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n  .description {\r\n    margin-top: 40px;\r\n    text-align: center;\r\n  }`;\r\n\n\n//# sourceURL=webpack://tvendor/./web-component-styles.js?");

/***/ }),

/***/ "./web-component.js":
/*!**************************!*\
  !*** ./web-component.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProductCard\": () => (/* binding */ ProductCard)\n/* harmony export */ });\n/* harmony import */ var _event_handlers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-handlers.js */ \"./event-handlers.js\");\n/* harmony import */ var _web_component_styles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web-component-styles.js */ \"./web-component-styles.js\");\n\r\n\r\n\r\nclass ProductCard extends HTMLElement {\r\n  static get observedAttributes() {\r\n    return [\"product-name\", \"image-url\", \"description\"];\r\n  }\r\n  constructor(title, description, id, imageUrl, price) {\r\n    super();\r\n    this.title = title;\r\n    this.description = description;\r\n    this.imageUrl = imageUrl;\r\n    this.id = id;\r\n    this.price = price;\r\n\r\n    this.shadow = this.attachShadow({ mode: \"open\" });\r\n\r\n    this.containerTag = document.createElement(\"div\");\r\n    this.containerTag.setAttribute(\"class\", \"card-container\");\r\n\r\n    const nameTag = document.createElement(\"h2\");\r\n    nameTag.setAttribute(\"class\", \"name\");\r\n    nameTag.textContent = this.title;\r\n\r\n    const imgFrameTag = document.createElement(\"div\");\r\n    imgFrameTag.setAttribute(\"class\", \"image-frame\");\r\n\r\n    const imgTag = document.createElement(\"img\");\r\n    imgTag.setAttribute(\"src\", this.imageUrl);\r\n    imgTag.setAttribute(\"alt\", this.title);\r\n    imgFrameTag.appendChild(imgTag);\r\n\r\n    const descriptionTag = document.createElement(\"p\");\r\n    descriptionTag.textContent = this.description;\r\n    descriptionTag.setAttribute(\"class\", \"description\");\r\n\r\n    const priceBadge = document.createElement(\"span\");\r\n    priceBadge.innerHTML = `<span class=\"price-badge\"><span class=\"price-whole\">${Math.floor(\r\n      this.price\r\n    )}</span><span class=\"price-change\">${(\r\n      (this.price - Math.floor(this.price)) *\r\n      100\r\n    ).toFixed(0)}</span></span>`;\r\n\r\n    this.addToBasket = document.createElement(\"span\");\r\n    this.addToBasket.setAttribute(\"class\", \"add-icon\");\r\n    this.addToBasket.setAttribute(\"id\", `add-${this.id}`);\r\n    this.addToBasket.innerHTML =\r\n      '<span class=\"plus-sign\">+</span><br><span class=\"add-badge\">ADD</span>';\r\n\r\n    let style = document.createElement(\"style\");\r\n\r\n    style.textContent = _web_component_styles_js__WEBPACK_IMPORTED_MODULE_1__.productCardStyles;\r\n\r\n    this.containerTag.appendChild(nameTag);\r\n    this.containerTag.appendChild(imgFrameTag);\r\n    this.containerTag.appendChild(descriptionTag);\r\n    this.containerTag.appendChild(priceBadge);\r\n    this.containerTag.appendChild(this.addToBasket);\r\n    this.shadow.appendChild(style);\r\n    this.shadow.appendChild(this.containerTag);\r\n  }\r\n  connectedCallback() {\r\n    this.containerTag.addEventListener(\"mouseover\", (event) => {\r\n      event.stopImmediatePropagation();\r\n      event.currentTarget.style.scale = \"1.05\";\r\n      this.shadow.querySelector(\".price-badge\").style.display = \"block\";\r\n      this.shadow.querySelector(\".add-icon\").style.display = \"block\";\r\n    });\r\n    this.containerTag.addEventListener(\"mouseleave\", (event) => {\r\n      event.stopImmediatePropagation();\r\n      event.currentTarget.style.scale = \"1\";\r\n      this.shadow.querySelector(\".price-badge\").style.display = \"none\";\r\n      this.shadow.querySelector(\".add-icon\").style.display = \"none\";\r\n    });\r\n    this.addToBasket.addEventListener(\"click\", (event) => {\r\n      event.currentTarget.style.scale = \"0.9\";\r\n      setTimeout(() => {\r\n        this.shadow.querySelector(\".add-icon\").style.scale = \"1\";\r\n      }, 100);\r\n      (0,_event_handlers_js__WEBPACK_IMPORTED_MODULE_0__.addToBasketHandler)(event.currentTarget.id);\r\n      (0,_event_handlers_js__WEBPACK_IMPORTED_MODULE_0__.localStorageUpdateHandler)(event.currentTarget.id);\r\n    });\r\n  }\r\n}\r\n\r\ncustomElements.define(\"product-card\", ProductCard);\r\n\n\n//# sourceURL=webpack://tvendor/./web-component.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;