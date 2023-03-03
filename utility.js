import { toggleDisplay } from "./helper.js";

export function addToBasketHandler (id) {
    const amountField = document.querySelector('#amount-field');
    const basket = document.querySelector('.pot-icon');
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
                    return {...el, amount: el.amount++}
                }else return el;
            })
        }else{
            newBasket = [...currentBasket, {...currentPlant, amount: 1}]
        }
    }else{
        newBasket = [{...currentPlant, amount: 1}]
    }
    localStorage.setItem('order-amount', JSON.stringify(newBasket))
    console.log(currentPlant, 'plant');
    console.log(currentBasket, 'basket');
    console.log(id, 'id');
    console.log(localStorage)
};

export function basketClickHandler () {
    toggleDisplay('.basket')
}
// localStorage.clear();
console.dir(localStorage)
// localStorageUpdateHandler()