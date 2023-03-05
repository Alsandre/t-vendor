
export function $ (selector) {
    return document.querySelector(selector);
}
export function toggleDisplay (selector, type='block') {
    let element = $(selector);
    let display = window.getComputedStyle(element);
    element.style.display = display.display === 'none' ? type : 'none';
}



