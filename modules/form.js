import Book from './book.js';

const bookTitle = document.getElementById('bookTitle');
const bookAuthors = document.getElementById('bookAuthors');
const books = JSON.parse(localStorage.getItem('books')) || [];
const id = books.length + 1;

const form = document.getElementById('form');
const AwsomeBkForm = document.querySelector('.AwsomeBkForm');
const h4 = document.querySelector('h4');

const formInputs = () => {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const msg = '';
    const clear = () => { msg.innerHTML = ''; };

    if (bookTitle.value === '' || bookAuthors.value === '') {
      setTimeout(clear, 2000);
    } else {
      const b = new Book(id, bookTitle.value, bookAuthors.value);
      Book.addBook(b);
      form.reset();
      setTimeout(clear, 1000);
      AwsomeBkForm.innerHTML = '';
      if (AwsomeBkForm.innerHTML === '') {
        AwsomeBkForm.style.border = '2px solid #000';
        h4.innerHTML = '';
      }
      Book.displayBooks();
    }
  });
};
export default formInputs;
