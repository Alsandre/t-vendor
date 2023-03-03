export function toggleDisplay (selector, type='block') {
    let element = document.querySelector(selector);
    element.style.display = element.style.display !== 'none' ? 'none' : type;
}