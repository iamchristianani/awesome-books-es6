import {bookInfo, title, author} from './variableList.js';

let bookArr = [];

class Book {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }

  static bookDisplay() {
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
    })

    const bookRemoveBtn = document.querySelectorAll('#remove-btn');
    bookRemoveBtn.forEach((button) => {
      button.addEventListener('click', () => {
        const dataSet = parseInt(button.dataset.id, 10);
        const buttonId = bookArr.findIndex(object => {
          return object.id === dataSet;
        });
        Book.removeBook(buttonId);
      });
    })
  }

  static addBook() {
    const eachBook = {};
    eachBook.id = bookArr.length;
    eachBook.title = title.value;
    eachBook.author = author.value;

    bookArr.push(eachBook);
    Book.bookDisplay();

    const jsonData = JSON.stringify(bookArr);
    localStorage.setItem('form', jsonData);
  }

  static removeBook(index) {
    bookArr.splice(index, 1);
    Book.bookDisplay();
    const jsonData = JSON.stringify(bookArr);
    localStorage.setItem('form', jsonData);
  }
}

const showBook = () => {
  const getJsonData = localStorage.getItem('form');
  if (getJsonData) {
    bookArr = JSON.parse(getJsonData);
  }
  Book.bookDisplay();
}



export {Book, showBook};