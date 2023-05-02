// Importing needed js files
import Book from './modules/book.js';
import formInputs from './modules/form.js';
import app from'./modules/app.js';
import { DateTime } from './modules/luxon.js';

// Calling needed functions from the js modules
formInputs();
Book.displayBooks();
app();

// Populating the Date
const populateDate = () => {
    const date = document.getElementById('date');
    date.innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
};
setInterval(populateDate, 1000);