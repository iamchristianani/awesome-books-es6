//EXPORT TO BOOKDISPLAY.JS
const bookInfo = document.querySelector('.all-books');
const title = document.querySelector('#input-title');
const author = document.querySelector('#input-author');

//EXPORT TO INDEX.JS
const form = document.querySelector('form');
const dateEl = document.querySelector('.date');
const listBtn = document.querySelector('.list-button');
const addBtn = document.querySelector('.add-button');
const contactBtn = document.querySelector('.contact-button');
const bookSection = document.querySelector('.books-list');
const addBookSection = document.querySelector('.add-book-form');
const contactSection = document.querySelector('.contact-info');
const listAnchor = document.querySelector('.list-anchor');
const addAnchor = document.querySelector('.add-anchor');
const contactAnchor = document.querySelector('.contact-anchor');

export {bookInfo, title, author, form, dateEl, listBtn, addBtn, contactBtn, bookSection, addBookSection, contactSection, listAnchor, addAnchor, contactAnchor};