import './styles/styles.css';
import './modules/img';

const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const submitBtn = document.getElementById('submit_btn');
const errorPrompt = document.getElementById('message');
const email = document.getElementById('email');
const firstName = document.getElementById('first_name');
const lastName = document.getElementById('last_name');

email.addEventListener('input', () => {
  if (/\S+@\S+\.\S+/.test(email.value) || email.value === '') {
    email.style.border = '';
  } else email.style.border = '1px solid red';
});

password1.addEventListener('input', () => {
  if (password1.value === password2.value || password1.length >= 1) {
    password1.style.border = '';
    password2.style.border = '';
  } else {
    password1.style.border = '1px solid red';
    password2.style.border = '1px solid red';
  }
});

password2.addEventListener('input', () => {
  if (password1.value === password2.value || password1.length >= 1) {
    password1.style.border = '';
    password2.style.border = '';
  } else {
    password1.style.border = '1px solid red';
    password2.style.border = '1px solid red';
  }
});

submitBtn.addEventListener('click', (e) => {
  const password = password1.value;
  const cPassword = password2.value;
  let message;

  if (firstName.value === '') {
    message = '* Please enter your first name';
    e.preventDefault();
  } else if (lastName.value === '') {
    message = '* Please enter your last name';
    e.preventDefault();
  } else if (email.value === '') {
    message = '* Please enter your email';
    e.preventDefault();
  } else if (!/\S+@\S+\.\S+/.test(email.value)) {
    message = '* Invalid email address';
  } else if (password.length === 0) {
    message = '* Please enter password';
  } else if (password.length <= 8 && cPassword.length <= 8) {
    message = '* Password must be 8 characters or longer';
    e.preventDefault();
  } else if (password !== cPassword) {
    message = '* Passwords do not match';
    e.preventDefault();
  }
  errorPrompt.textContent = message;
});

// ------------------------------------------------

const leftImage = document.querySelector('.content_left');

function imageTransition() {
  const currentImage = leftImage.style.backgroundImage;
  const image1 = `url("assets/img/image1.jpg")`;
  const image2 = `url("assets/img/image2.jpg")`;
  const image3 = `url("assets/img/image3.jpg")`;

  leftImage.style.backgroundImage = image1;

  if (currentImage === image1) {
    leftImage.style.backgroundImage = image2;
  }
  if (currentImage === image2) {
    leftImage.style.backgroundImage = image3;
  }
  if (currentImage === image3) {
    leftImage.style.backgroundImage = image1;
  }
}

setInterval(() => {
  imageTransition();
}, 6000);
