import {
  addToBasketHandler,
  localStorageUpdateHandler,
} from "./event-handlers.js";
import { productCardStyles } from "./web-component-styles.js";

export class ProductCard extends HTMLElement {
  static get observedAttributes() {
    return ["product-name", "image-url", "description"];
  }
  constructor(title, description, id, imageUrl, price) {
    super();
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
    this.id = id;
    this.price = price;

    this.shadow = this.attachShadow({ mode: "open" });

    this.containerTag = document.createElement("div");
    this.containerTag.setAttribute("class", "card-container");

    const nameTag = document.createElement("h2");
    nameTag.setAttribute("class", "name");
    nameTag.textContent = this.title;

    const imgFrameTag = document.createElement("div");
    imgFrameTag.setAttribute("class", "image-frame");

    const imgTag = document.createElement("img");
    imgTag.setAttribute("src", this.imageUrl);
    imgTag.setAttribute("alt", this.title);
    imgFrameTag.appendChild(imgTag);

    const descriptionTag = document.createElement("p");
    descriptionTag.textContent = this.description;
    descriptionTag.setAttribute("class", "description");

    const priceBadge = document.createElement("span");
    priceBadge.innerHTML = `<span class="price-badge"><span class="price-whole">${Math.floor(
      this.price
    )}</span><span class="price-change">${(
      (this.price - Math.floor(this.price)) *
      100
    ).toFixed(0)}</span></span>`;

    this.addToBasket = document.createElement("span");
    this.addToBasket.setAttribute("class", "add-icon");
    this.addToBasket.setAttribute("id", `add-${this.id}`);
    this.addToBasket.innerHTML =
      '<span class="plus-sign">+</span><br><span class="add-badge">ADD</span>';

    let style = document.createElement("style");

    style.textContent = productCardStyles;

    this.containerTag.appendChild(nameTag);
    this.containerTag.appendChild(imgFrameTag);
    this.containerTag.appendChild(descriptionTag);
    this.containerTag.appendChild(priceBadge);
    this.containerTag.appendChild(this.addToBasket);
    this.shadow.appendChild(style);
    this.shadow.appendChild(this.containerTag);
  }
  connectedCallback() {
    this.containerTag.addEventListener("mouseover", (event) => {
      event.stopImmediatePropagation();
      event.currentTarget.style.scale = "1.05";
      this.shadow.querySelector(".price-badge").style.display = "block";
      this.shadow.querySelector(".add-icon").style.display = "block";
    });
    this.containerTag.addEventListener("mouseleave", (event) => {
      event.stopImmediatePropagation();
      event.currentTarget.style.scale = "1";
      this.shadow.querySelector(".price-badge").style.display = "none";
      this.shadow.querySelector(".add-icon").style.display = "none";
    });
    this.addToBasket.addEventListener("click", (event) => {
      event.currentTarget.style.scale = "0.9";
      setTimeout(() => {
        this.shadow.querySelector(".add-icon").style.scale = "1";
      }, 100);
      addToBasketHandler(event.currentTarget.id);
      localStorageUpdateHandler(event.currentTarget.id);
    });
  }
}

customElements.define("product-card", ProductCard);
