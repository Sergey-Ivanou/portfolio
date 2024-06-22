// мобильное меню

const burgerBtn = document.querySelector('.burger-btn'),
      menu = document.querySelector('.header__menu-list'),
      itemMenu = document.querySelectorAll('.header__menu-link');

function toggleMenu () {
  burgerBtn.classList.toggle('active');
  menu.classList.toggle('active');
};

burgerBtn.addEventListener('click', toggleMenu);
menu.addEventListener('click', toggleMenu);
// itemMenu.addEventListener('click', toggleMenu);

// смена цвета на странице

const themeBtn = document.querySelector('.theme-color__btn');

if (localStorage.getItem('theme') === 'light' && themeBtn.classList.contains('icon-sun')) {
  themeBtn.classList.remove('icon-sun');
  themeBtn.classList.add('icon-moon');
  document.body.classList.add('light-theme');
} else {
  themeBtn.classList.remove('icon-moon');
  themeBtn.classList.add('icon-sun');
  document.body.classList.remove('light-theme');
}

themeBtn.addEventListener('click', function () {
  themeBtn.classList.toggle('icon-moon');
  themeBtn.classList.toggle('icon-sun');
  let isLight = document.body.classList.toggle('light-theme');
  if (isLight) {
    localStorage.setItem('theme', 'light')
  } else {
    localStorage.setItem('theme', 'dark');
  }
});


// перевод текста на странице

import i18Obj from './translate.js';





const langBtnRu = document.querySelector('.rus-lang');
const langBtnEn = document.querySelector('.eng-lang');
const langButtons = document.querySelectorAll('[data-lang]');
 
 
if (localStorage.getItem('language') === 'en' ) {
  langBtnRu.classList.remove('active');
  langBtnEn.classList.add('active');
} else {
  langBtnRu.classList.add('active');
  langBtnEn.classList.remove('active');
}



langButtons.forEach((item) => {
  item.addEventListener('click', (e) => {
  changeClassActive(item);
  const lang = item.textContent;
  getTranslate(lang);
  });
});

function changeClassActive(elem) {
  langButtons.forEach((item) => {
  item.classList.remove('active');
  });
  elem.classList.add('active');
}

function getTranslate(lang) {
  const translateItems = document.querySelectorAll('[data-i18]');
  translateItems.forEach((item) => {
  const itemValue = item.dataset.i18;
    item.innerHTML = i18Obj[`${lang}`][`${itemValue}`];
  // if (item.placeholder) {
  //   // item.innerHTML = '';
  //   item.innerHTML = i18Obj[`${lang}`][`${itemValue}`];
  // } else {
  //   // item.innerHTML = ''
  //   item.innerHTML = i18Obj[`${lang}`][`${itemValue}`];  
  // }
  });
}


// langButtons.forEach(function (btn) {
//    btn.addEventListener('click', function(event) {
//     resetActiveClass(langButtons, 'active')
//     btn.classList.add('active');   
//     localStorage.setItem('language', event.target.dataset.lang);
//     // currentLang = i18Obj[event.target.dataset.lang]
//     currentLang = event.target.dataset.lang;
//     console.log(currentLang);
//     translateGet()
//    })
// })








// function translateGet (currentLang) {
//     const homeText = document.querySelectorAll('[data-i18]');
//     console.log(homeText);
//     homeText.forEach((item) => {
//     let itemValue = item.dataset.i18;
//     console.log(itemValue);
//     if (item.placeholder) {
//     item.textContent = currentText[`${itemValue}`];

//       item.placeholder = '';
//       item.placeholder = i18Obj[`${currentLang}`][`${itemValue}`];
//     } 
//     else {
//       item.textContent = ''
//       item.textContent = i18Obj[`${currentLang}`][`${itemValue}`];  
//     }
//   })
// }

// langBtnEn.addEventListener('click', function() {
//   langBtnEn.classList.toggle('active');
//   langBtnRu.classList.remove('active');
// })

// langBtnRu.addEventListener('click', function() {
//   langBtnRu.classList.toggle('active');
//   langBtnEn.classList.remove('active');
// })

// let currentLang = langBtnEn.getAttribute('data-btn')

// console.log(currentLang);

// const langButtons = document.querySelectorAll('[data-btn]');
// let currentLang = localStorage.getItem("language") || checkBrowserLang() || "en";



// langBtn.forEach((lngbtn) => {
//   lngbtn.addEventListener('click', (event) => {
//     langBtn.classList.toggle('active')
// })
// })



// langBtn.forEach((lngbtn) => {
//   lngbtn.addEventListener('click', (event) => {
//   if (!event.target.classList.contains('active'));
// {
//   currentLang = event.target.dataset.btn;
//   localStorage.setItem("language", event.target.dataset.btn);
//   resetActiveClass(langBtn, "active");
//   lngbtn.classList.add("active");
// }
//   })
// }) 
    


// function resetActiveClass(arr, activeClass) {
//   arr.forEach((elem) => {
//     elem.classList.remove(activeClass);
//   });
// }

// function checkActiveLangButton() {
//   switch (currentLang) {
//     case "ru":
//       document
//         .querySelector('[data-btn="ru"]')
//         .classList.add("active");
//       break;
//     case "en":
//       document
//         .querySelector('[data-btn="en"]')
//         .classList.add("active");
//       break;
    // default:
    //   document
    //     .querySelector('[data-btn="en"]')
    //     .classList.add("active");
//   }
// }

// checkActiveLangButton();


// const homeText = i18Obj;

// console.log(homeText)

