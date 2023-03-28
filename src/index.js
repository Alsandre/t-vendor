import { $, tagListRender } from "../utility.js";
import {
  basketClickHandler,
  clearBasketHandler,
  clearTagHandler,
  onBasketClose,
  searchForNameHandler,
  searchForTagHandler,
} from "../event-handlers.js";
import { requestData } from "../request.js";

export let uniqueTagNames = [];

const basketBtn = $(".basket-button");
const backdrop = $("#backdrop");
const basketClearBtn = $("#clear-basket");
const basketCloseBtn = $("#close-basket");
const tagSearchBar = $("#search-bar");
const nameSearchBar = $("#search-by-name");
const clearTagnameBtn = $(".clear-tagname");

nameSearchBar.oninput = (event) => searchForNameHandler(event);

clearTagnameBtn.onclick = clearTagHandler;

tagSearchBar.oninput = (e) =>
  searchForTagHandler(e, uniqueTagNames, tagListRender);

basketCloseBtn.onclick = onBasketClose;

basketClearBtn.onclick = clearBasketHandler;

backdrop.onclick = onBasketClose;

basketBtn.onclick = basketClickHandler;

// requestData(uniqueTagNames);

