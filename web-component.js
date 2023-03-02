export class ProductCard extends HTMLElement {
  static get observedAttributes () {
    return ['product-name', 'image-url', 'description']
  }
  constructor(title, description, id, imageUrl) {
    super();
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
    this.id = id;

    const shadow = this.attachShadow({ mode: "open" });

    const containerTag = document.createElement("div");
    containerTag.setAttribute("class", "card-container");

    const nameTag = document.createElement("h2");
    nameTag.setAttribute("class", "name");
    nameTag.textContent = this.title;

    const imgFrameTag = document.createElement("div");
    imgFrameTag.setAttribute("class", "image-frame");

    const imgTag = document.createElement("img");
    imgTag.setAttribute("src", this.imageUrl);
    imgFrameTag.appendChild(imgTag);

    const descriptionTag = document.createElement("p");
    descriptionTag.textContent = this.description;
    descriptionTag.setAttribute("class", "description");



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
            overflow: hidden;
          }

          .name {
            margin-block-end: 0;
            margin-block-start: 0;
            text-align: center;
            font-size: 20px;
            line-height: 20px;
            font-style: italic;
          }

          .image-frame {
            width: 136px;
            height: 115px;
            margin: auto;
            overflow: hidden;
            box-shadow: inset 4px 4px 10px rgba(16, 64, 9, 1)

          }
          .image-frame img {
            width: 100%;
            height: 100%;
          }
          .description {
            margin-top: 60px;
            text-align: center;
          }`;

    containerTag.appendChild(nameTag);
    containerTag.appendChild(imgFrameTag);
    containerTag.appendChild(descriptionTag);
    shadow.appendChild(style);
    shadow.appendChild(containerTag);

    containerTag.addEventListener('mouseover', (event) => {
      event.stopImmediatePropagation();
      event.currentTarget.style.scale = '1.05';
      event.currentTarget.style.height = 'auto';      
    });
    containerTag.addEventListener('mouseleave', (event) => {
      event.stopImmediatePropagation();
      event.currentTarget.style.scale = '1'
      event.currentTarget.style.height = '260px';
    })
  }
  get 
}

customElements.define("product-card", ProductCard);
