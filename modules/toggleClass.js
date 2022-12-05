import {
  bookSection, addBookSection, contactSection, listAnchor, addAnchor, contactAnchor,
} from './variableList.js';

const showBookList = () => {
  bookSection.classList.add('active');
  bookSection.classList.remove('hiiden');
  addBookSection.classList.add('hidden');
  addBookSection.classList.remove('active');
  contactSection.classList.add('hidden');
  contactSection.classList.remove('active');

  listAnchor.classList.add('list-active');
  addAnchor.classList.remove('list-active');
  contactAnchor.classList.remove('list-active');
};

const showAddBook = () => {
  bookSection.classList.remove('active');
  bookSection.classList.add('hidden');
  addBookSection.classList.add('active');
  addBookSection.classList.remove('hidden');
  contactSection.classList.add('hidden');
  contactSection.classList.remove('active');

  listAnchor.classList.remove('list-active');
  addAnchor.classList.add('list-active');
  contactAnchor.classList.remove('list-active');
};

const showRemoveBook = () => {
  bookSection.classList.add('hidden');
  bookSection.classList.remove('active');
  addBookSection.classList.remove('active');
  addBookSection.classList.add('hidden');
  contactSection.classList.add('active');
  contactSection.classList.remove('hidden');

  listAnchor.classList.remove('list-active');
  addAnchor.classList.remove('list-active');
  contactAnchor.classList.add('list-active');
};

export { showBookList, showAddBook, showRemoveBook };