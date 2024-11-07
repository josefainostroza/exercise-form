const rootStyles = document.documentElement.style;
const formElement = document.getElementById('form');
const buttonElement = document.getElementById('button');
const formTextCardNumber = document.getElementById('textCardNumber');
const formTextCvc = document.getElementById('textCvc');
const numberCvcBack = document.getElementById('backCvc');
const numberFront = document.getElementById('cardNumberFront');
const nameFront = document.getElementById('name');
const formNameText = document.getElementById('nameform');
const dateMonths = document.getElementById('months');
const formDateMonths = document.getElementById('monthsform');
const dateYears = document.getElementById('year');
const formDateYears = document.getElementById('yearform');

const printName = () => {
  nameFront.textContent = formNameText.value;
};

const printNumber = () => {
  numberFront.textContent = formTextCardNumber.value;
};

const printMonths = () => {
  dateMonths.textContent = formDateMonths.value;
};

const printYears = () => {
  dateYears.textContent = formDateYears.value;
};

const printCvc = () => {
  numberCvcBack.textContent = formTextCvc.value;
};

const evalForm = (event) => {
  event.preventDefault();
  if (formNameText.value === '') {
    // rootStyles.setProperty('--input-error', 'red');
    formNameText.classList.add('inputError');
  } else {
    formNameText.classList.remove('inputError');
  }
  if (formTextCardNumber.value === '') {
    // rootStyles.setProperty('--input-error', 'red');
    formTextCardNumber.classList.add('inputError');
  } else {
    formTextCardNumber.classList.remove('inputError');
  }
  if (formDateMonths.value === '') {
    // rootStyles.setProperty('--input-error', 'red');
    formDateMonths.classList.add('inputError');
  } else {
    formDateMonths.classList.remove('inputError');
  }
  if (formDateYears.value === '') {
    // rootStyles.setProperty('--input-error', 'red');
    formDateYears.classList.add('inputError');
  } else {
    formDateYears.classList.remove('inputError');
  }
  if (formTextCvc.value === '') {
    // rootStyles.setProperty('--input-error', 'red');
    formTextCvc.classList.add('inputError');
  } else {
    formTextCvc.classList.remove('inputError');
  }
};

formTextCvc.addEventListener('input', printCvc);
formTextCardNumber.addEventListener('input', printNumber);
formNameText.addEventListener('input', printName);
formDateMonths.addEventListener('input', printMonths);
formDateYears.addEventListener('input', printYears);
buttonElement.addEventListener('click', evalForm);
