import { toggleDisplay } from "./utility.js";

export function addToBasketHandler (id) {
    const amountField = $('#amount-field');
    const basket = $('.pot-icon');
    amountField.textContent =  amountField.textContent === "" ? 1 : ++amountField.textContent;
    basket.style.animationName = 'bump';
    setTimeout(() => {
        basket.style.animationName = '';
    }, 100);
}

export function localStorageUpdateHandler (id) {
    let newBasket;
    let currentBasket = JSON.parse(localStorage.getItem('order-amount'));
    let currentPlant = JSON.parse(localStorage.getItem('fresh-menu')).find(el => `add_${el.id}` === id);
    if(currentBasket && currentBasket.length>0){
        let isPlantInCurrentBasket = currentBasket.find(el => `add_${el.id}` === id);
        if(isPlantInCurrentBasket){
            newBasket =  currentBasket.map(el => {
                if(`add_${el.id}` === id){
                    return {...el, amount: el.amount+1}
                }else return el;
            })
        }else{
            newBasket = [...currentBasket, {...currentPlant, amount: 1}]
        }
    }else{
        newBasket = [{...currentPlant, amount: 1}]
    }
    localStorage.setItem('order-amount', JSON.stringify(newBasket))
    console.log(JSON.parse(localStorage.getItem('order-amount')))
};

export function basketClickHandler () {
    toggleDisplay('#basket');
    toggleDisplay('#backdrop');
}

