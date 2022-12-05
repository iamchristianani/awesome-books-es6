/* eslint-disable no-unused-vars */

//IMPORT MODULES HERE
import {form, dateEl, listBtn, addBtn, contactBtn, bookSection, addBookSection, contactSection, listAnchor, addAnchor, contactAnchor} from './modules/variableList.js';
import {Book, showBook} from './modules/bookDisplay.js';
import {showDate} from './modules/dateDisplay.js';
import {showBookList, showAddBook, showRemoveBook} from './modules/toggleClass.js';

form.addEventListener('submit', (e) => {
  e.preventDefault();
  Book.addBook();
});
window.addEventListener('load', () => {
  showBook();
});

window.setInterval(() => {
  showDate();
}, 1000);

// SINGLE PAGE APPLICATION NAVIGATION
listBtn.addEventListener('click', () => {
  showBookList();
});

addBtn.addEventListener('click', () => {
  showAddBook();
});

contactBtn.addEventListener('click', () => {
  showRemoveBook();
});
