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
