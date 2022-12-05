/* eslint-disable no-unused-vars */

// IMPORT MODULES HERE
import {
  form, listBtn, addBtn, contactBtn,
} from './modules/variableList.js';
import { addBook, showBook } from './modules/bookDisplay.js';
import ShowDate from './modules/dateDisplay.js';
import { showBookList, showAddBook, showRemoveBook } from './modules/toggleClass.js';

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addBook();
});

window.addEventListener('load', () => {
  showBook();
});

window.setInterval(() => {
  ShowDate();
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
