const AwsomeBkForm = document.querySelector('.AwsomeBkForm');
export default class Book {
  constructor(id, bookTitle, bookAuthors) {
    this.id = id;
    this.bookTitle = bookTitle;
    this.bookAuthors = bookAuthors;
  }

  static addBook(book) {
    const books = Book.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static removeBook(id) {
    const books = Book.getBooks();
    let flag = false;
    books.forEach((book, index) => {
      if (book.id === parseInt(id, 10)) {
        books.splice(index, 1);
        flag = true;
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
    return flag;
  }

  static displayBooks() {
    const books = Book.getBooks();

    books.forEach((book) => {
      const bookMarkup = `<div class ="book_list">
        <span class="book_text">"${book.bookTitle}" by ${book.bookAuthors} </span>
        <button class="remove" id=${book.id}>Remove</button>
        </div>`;
      AwsomeBkForm.innerHTML += bookMarkup;
      const deleteBtn = document.querySelectorAll('.remove');
      deleteBtn.forEach((btn) => {
        btn.addEventListener('click', () => {
          Book.removeBook(btn.id);
          btn.parentElement.remove();
          if (AwsomeBkForm.innerHTML === '') {
            AwsomeBkForm.style.border = 'none';
          }
        });
      });
    });
  }
}