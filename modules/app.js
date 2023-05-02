const linkItem = document.querySelectorAll('.nav_links');
const bookAwsomeBkForm = document.querySelector('.list_a');
const addBookContainer = document.querySelector('.BookRecord');
const contactContainer = document.querySelector('.contact');

const app = () => {
  const openPage = (i) => {
    addBookContainer.style.display = 'none';
    contactContainer.style.display = 'none';
    bookAwsomeBkForm.style.display = 'none';

    linkItem.forEach((item) => {
      item.classList.remove('active');
    });

    if (i === 1) {
      addBookContainer.style.display = 'flex';
      linkItem[i].classList.add('active');
    } else if (i === 2) {
      contactContainer.style.display = 'flex';
      linkItem[i].classList.add('active');
    } else {
      bookAwsomeBkForm.style.display = 'flex';
      linkItem[i].classList.add('active');
    }
  };

  for (let i = 0; i < linkItem.length; i += 1) {
    linkItem[i].addEventListener('click', () => {
      openPage(i);
    });
  }
};
export default app;
