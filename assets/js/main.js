// смена цвета на странице
let currentTheme
const themeBtn = document.querySelector('.theme-color__btn');
const theme = document.querySelector('.theme');
let colorTheme = themeBtn.classList;
themeBtn.addEventListener('click', function () {
  themeBtn.classList.toggle('icon-moon');
  themeBtn.classList.toggle('icon-sun');
  theme.classList.toggle('light-theme');
});


// мобильное меню

const burgerBtn = document.querySelector('.burger-btn');
const menu = document.querySelector('.header__menu-list');
burgerBtn.addEventListener('click', function () {
  burgerBtn.classList.toggle('active');
  menu.classList.toggle('active');
})

// перевод текста на странице

import i18Obj from './translate.js';

// const currentText = i18Obj;
const langBtn = document.querySelectorAll('[data-btn]');
let currentLang = localStorage.getItem("language") || checkBrowserLang() || "en";

// function changeLang(currentLang) {
//   i18Obj
// }



langBtn.forEach((lngbtn) => {
  lngbtn.addEventListener('click', (event) => {
  if (!event.target.classList.contains('active'));
{
  currentLang = event.target.dataset.btn;
  localStorage.setItem("language", event.target.dataset.btn);
  resetActiveClass(langBtn, "active");
  lngbtn.classList.add("active");
}
  })
}) 
    


function resetActiveClass(arr, activeClass) {
  arr.forEach((elem) => {
    elem.classList.remove(activeClass);
  });
}

function checkActiveLangButton() {
  switch (currentLang) {
    case "ru":
      document
        .querySelector('[data-btn="ru"]')
        .classList.add("active");
      break;
    case "en":
      document
        .querySelector('[data-btn="en"]')
        .classList.add("active");
      break;
    // default:
    //   document
    //     .querySelector('[data-btn="en"]')
    //     .classList.add("active");
  }
}

checkActiveLangButton();


const homeText = i18Obj;

console.log(homeText)