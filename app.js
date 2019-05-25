//! Book Class
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

//! UI Class

class UI {
  static displayBooks() {
    const StoredBooks = [
      {
      title: 'Book 1',
      author: 'Person',
      isbn: '1234'
      },
      {
        title: 'Book 2',
        author: 'Another Person',
        isbn: '5678'
      }
    ];

    const books = StoredBooks;

    books.forEach((book) => UI.addBookToList(book));
  }
  static addBookToList(book) {
    const list = document.querySelector('#book-list');

    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
    `;

    list.appendChild(row);
  }

  static deleteBook(el) {
    if(el.classList.contains('delete')) {
      el.parentElement.parentElement.remove()
    }
  }
  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
  }
}
//! Storage CLass

//! Event - Display a book

document.addEventListener('DOMContentLoaded', UI.displayBooks);

//! Event - Add a Book
document.querySelector('#book-form').addEventListener('submit', (e) => {
  // Prevent actual submit
  e.preventDefault();

  // grabs the form values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const isbn = document.querySelector('#isbn').value;

  // validate a book

  // instantiating a book
  const book = new Book(title, author, isbn);

  // Add book to list
  UI.addBookToList(book);

  // clear fields
  UI.clearFields();
});
//! Event - Remove a Book
document.querySelector('#book-list').addEventListener('click', (e) => {
  UI.deleteBook(e.target);
})