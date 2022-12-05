/* eslint-disable no-unused-vars */

//IMPORT MODULES HERE
import {form, dateEl, listBtn, addBtn, contactBtn, bookSection, addBookSection, contactSection, listAnchor, addAnchor, contactAnchor} from './modules/variableList.js';
import {Book, showBook, bookArr} from './modules/bookDisplay.js';

// let bookArr = [];

// class Book {
//   constructor(title, author, id) {
//     this.title = title;
//     this.author = author;
//     this.id = id;
//   }

//   static bookDisplay() {
//     bookInfo.innerHTML = '';
//     for (let i = 0; i < bookArr.length; i += 1) {
//       const oneBook = document.createElement('div');
//       oneBook.className = 'book';
//       oneBook.innerHTML = `
//         <p class="title">"${bookArr[i].title}" by ${bookArr[i].author}</p>
//         <button class="remove" onclick="Book.removeBook(${i})">Remove</button>
//       `;
//       bookInfo.appendChild(oneBook);
//       title.value = '';
//       author.value = '';
//     }
//   }

//   static addBook() {
//     const eachBook = {};
//     eachBook.id = bookArr.length;
//     eachBook.title = title.value;
//     eachBook.author = author.value;

//     bookArr.push(eachBook);
//     Book.bookDisplay();

//     const jsonData = JSON.stringify(bookArr);
//     localStorage.setItem('form', jsonData);
//   }

//   static removeBook(index) {
//     bookArr.splice(index, 1);
//     Book.bookDisplay();
//     const jsonData = JSON.stringify(bookArr);
//     localStorage.setItem('form', jsonData);
//   }
// }

form.addEventListener('submit', (e) => {
  e.preventDefault();
  Book.addBook();
});
window.addEventListener('load', () => {
  // const getJsonData = localStorage.getItem('form');
  // if (getJsonData) {
  //   bookArr = JSON.parse(getJsonData);
  // }
  // Book.bookDisplay();
  showBook();
});

// SPA Navigation
window.setInterval(() => {
  const date = new Date();
  dateEl.innerHTML = date;
}, 1000);

listBtn.addEventListener('click', () => {
  bookSection.classList.add('active');
  bookSection.classList.remove('hiiden');
  addBookSection.classList.add('hidden');
  addBookSection.classList.remove('active');
  contactSection.classList.add('hidden');
  contactSection.classList.remove('active');

  listAnchor.classList.add('list-active');
  addAnchor.classList.remove('list-active');
  contactAnchor.classList.remove('list-active');
});

addBtn.addEventListener('click', () => {
  bookSection.classList.remove('active');
  bookSection.classList.add('hidden');
  addBookSection.classList.add('active');
  addBookSection.classList.remove('hidden');
  contactSection.classList.add('hidden');
  contactSection.classList.remove('active');

  listAnchor.classList.remove('list-active');
  addAnchor.classList.add('list-active');
  contactAnchor.classList.remove('list-active');
});

contactBtn.addEventListener('click', () => {
  bookSection.classList.add('hidden');
  bookSection.classList.remove('active');
  addBookSection.classList.remove('active');
  addBookSection.classList.add('hidden');
  contactSection.classList.add('active');
  contactSection.classList.remove('hidden');

  listAnchor.classList.remove('list-active');
  addAnchor.classList.remove('list-active');
  contactAnchor.classList.add('list-active');
});
