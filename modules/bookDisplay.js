import { bookInfo, title, author } from './variableList.js';

let bookArr = [];
let count = 0;

const bookDisplay = () => {
  bookInfo.innerHTML = '';
  bookArr.forEach((book) => {
    const oneBook = document.createElement('div');
    oneBook.className = 'book';
    oneBook.innerHTML = `
      <p class="title">"${book.title}" by ${book.author}</p>
      <button data-id="${book.id}" class="remove" id="remove-btn">Remove</button>
    `;
    bookInfo.appendChild(oneBook);
    title.value = '';
    author.value = '';
  });

  const bookRemoveBtn = document.querySelectorAll('#remove-btn');
  bookRemoveBtn.forEach((button) => {
    button.addEventListener('click', () => {
      const dataSet = parseInt(button.dataset.id, 10);
      const buttonId = bookArr.findIndex((object) => object.id === dataSet);
      // eslint-disable-next-line no-use-before-define
      removeBook(buttonId);
    });
  });
};

const addBook = () => {
  const eachBook = {};
  eachBook.id = count;
  eachBook.title = title.value;
  eachBook.author = author.value;

  bookArr.push(eachBook);
  count += 1;
  bookDisplay();

  const jsonData = JSON.stringify(bookArr);
  const countJsonData = JSON.stringify(count);
  localStorage.setItem('form', jsonData);
  localStorage.setItem('count', countJsonData);
};

const removeBook = (index) => {
  bookArr.splice(index, 1);
  bookDisplay();
  const jsonData = JSON.stringify(bookArr);
  localStorage.setItem('form', jsonData);
};

const showBook = () => {
  const getJsonData = localStorage.getItem('form');
  const getCountData = localStorage.getItem('count');

  if (getJsonData) {
    bookArr = JSON.parse(getJsonData);
  }
  if (getCountData) {
    count = JSON.parse(getCountData);
  } else {
    count = 0;
  }
  bookDisplay();
};

export { showBook, addBook };