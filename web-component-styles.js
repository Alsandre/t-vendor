export const basketStyles = `.basket {
    position: relative;
    width: 40%;
    min-width: 400px;
    height: auto;
    padding: 2rem;
    position: fixed;
    background-color: #e7ebe3;
    border-radius: 20px;
    box-shadow: 1px 1px 10px black, -1px -1px 20px black;
    top: 6rem;
    right: 50%;
    transform: translateX(50%);
    z-index: 100;
    // display: none;
}
.basket-list {
    list-style: none;
}
.basket-item {
    background-color: #ccc;
    display: flex;
    justify-content: space-between;
    text-align: center;
}
.remove-button-space {
    width: 50px;
    
}
.basket-product-name{
    flex: 1 0 100px;
    border-right: 1px solid #333;
}
.basket-product-price {
    flex-basis: 60px;
}
.basket-product-amount {
    flex-basis: 80px;
}
.basket-product-sum {
    flex-basis: 60px;
}
.basket-total {
    margin: 0.3rem 0;
    padding: 0.5rem;
    display: flex;
    justify-content: flex-end;
}
#basket-total {
    width: 90px;
    text-align: left;
    padding-left: 0.3em;
}
.basket-actions {
    margin-top: 0.3rem;
    display: flex;
    justify-content: space-around;
}
.basket-actions button {
    background-color: rgba(255, 202, 92);
    padding: 0.5em;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    border: 1px solid transparent;
}
.basket-actions button:hover,
.basket-actions button:active {
    scale: 1.03;
    border: 1px solid #333;
}`

export const productCardStyles = `
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