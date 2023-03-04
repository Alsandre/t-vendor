import { addToBasketHandler, localStorageUpdateHandler } from "./utility.js";

export class ProductCard extends HTMLElement {
  static get observedAttributes () {
    return ['product-name', 'image-url', 'description']
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

    const priceBadge = document.createElement('span');
    priceBadge.innerHTML = `<span class="price-badge"><span class="price-whole">${Math.floor(this.price)}</span><span class="price-change">${((this.price-Math.floor(this.price))*100).toFixed(0)}</span></span>`
    // priceBadge.textContent = this.price;

    this.addToBasket = document.createElement('span');
    this.addToBasket.setAttribute('class', 'add-icon');
    this.addToBasket.setAttribute('id', `add_${this.id}`);
    this.addToBasket.innerHTML = '<span class="plus-sign">+</span><br><span class="add-badge">ADD</span>';


    let style = document.createElement("style");

    style.textContent = `
        :host {
            display: block;
        }
        .card-container {
          box-sizing: border-box;
            width: 170px;
            height: 260px;
            margin: 2rem auto;
            background: url(./assets/deco-card.png);
            background-size: 100%;
            position: relative;
            padding-top: 30px;
          }

          .name {
            margin-block-end: 0;
            margin-block-start: 0;
            text-align: center;
            font-size: 20px;
            line-height: 20px;
            font-style: italic;
          }
          .price-badge {
            background-color: rgba(193, 202, 194, 0.6);
            border-radius: 50%;
            overflow: hidden;
            position: absolute;
            top: 0;
            right: -0.5em; 
            transform: translate(50%); 
            display: none;
          }
          .price-whole {
            font-family: 'Lobster', cursive;
            display: block;
            width: 40px;
            padding: 0.3rem 0 0 0;
            font-weight: bold;
            text-align: center;
            background-color: rgba(255, 202, 92);
            border-bottom: 1px solid #ccc;
          }
          .price-change {
            font-family: 'Lobster', cursive;
            display: block;
            width: 40px;
            padding: 0.1rem 0 0.3rem 0;
            text-align: center;
            font-style: italic;
            font-size: 0.7em;
            background-color: rgba(122, 175, 136, 1);
          }
          .add-icon {
            background-color: rgba(193, 202, 194, 0.6);
            padding: 0.1em;
            border-bottom-left-radius: 10px;
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
            text-align: center;
            color: #333;
            position: absolute;
            top: 50px;
            right: -0.5em; 
            transform: translate(50%); 
            transition: all 0.2s;
            display: none;
          }
          .plus-sign {
            // display: block;
            font-family: courier;
            font-weight: bold;
            font-size: 20px;
            line-height: 15px;
            padding: 0;
            margin: 0;
          }
          .add-badge {
            font-size: 14px;
            line-height: 10px;
            font-family: courier;
            margin: 0;
          }
          
          .add-icon:hover {
            background-color: rgba(193, 202, 194, 1);
            border: 1px solid rgba(255, 202, 92);
            cursor: pointer;
          }

          .image-frame {
            width: 136px;
            height: 115px;
            margin: auto;
          }
          .image-frame img {
            width: 100%;
            height: 100%;
          }
          .description {
            margin-top: 40px;
            text-align: center;
          }`;

    this.containerTag.appendChild(nameTag);
    this.containerTag.appendChild(imgFrameTag);
    this.containerTag.appendChild(descriptionTag);
    this.containerTag.appendChild(priceBadge);
    this.containerTag.appendChild(this.addToBasket);
    this.shadow.appendChild(style);
    this.shadow.appendChild(this.containerTag);

  }
  connectedCallback() {
    this.containerTag.addEventListener('mouseover', (event) => {
      event.stopImmediatePropagation();
      event.currentTarget.style.scale = '1.05';
      this.shadow.querySelector('.price-badge').style.display = 'block';
      this.shadow.querySelector('.add-icon').style.display = 'block';
    });
    this.containerTag.addEventListener('mouseleave', (event) => {
      event.stopImmediatePropagation();
      event.currentTarget.style.scale = '1';
      this.shadow.querySelector('.price-badge').style.display = 'none';
      this.shadow.querySelector('.add-icon').style.display = 'none';
    })
    this.addToBasket.addEventListener('click', (event) => {
      event.currentTarget.style.scale = '0.9';
      setTimeout(() => {
        this.shadow.querySelector('.add-icon').style.scale = '1';
      }, 100);
      addToBasketHandler();
      console.log(event.currentTarget.id)
      localStorageUpdateHandler(event.currentTarget.id)

    })
  }
}

customElements.define("product-card", ProductCard);
