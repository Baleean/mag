"use strict";

let menuItems = document.querySelectorAll('.button__text_complex-watches');

for (let item of menuItems) {
    item.addEventListener('click', function(e) {
        removeClass('.button__text_active');
        item.classList.toggle('button__text_active');
        let category = item.textContent;
        category = category.trim().toLowerCase();
        changeBlock(category);
    });
}

function removeClass (classname) {
    let itemActive = document.querySelector(classname);
    classname = classname.substring(1);
    if(itemActive !== null) {
        itemActive.classList.toggle(classname);
    }
}

function changeBlock (category) {

    removeClass('.product__content_active');
    let categoryName = ".product__content_" + category;
    let block = document.querySelector(categoryName);
    console.log(block);
    block.classList.toggle('product__content_active');
}
