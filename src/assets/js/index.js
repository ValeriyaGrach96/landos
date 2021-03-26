'Use strict';

const buttonNavigation = document.querySelector('.button-nav');
const asideNavigation = document.querySelector('aside');
const closeOfAside = asideNavigation.querySelector('.aside-close');
const listItemsOfAside = asideNavigation.querySelectorAll('.nav-li')
const buttonRegisterAside = asideNavigation.querySelector('.sign-up');

buttonNavigation.addEventListener('click', function () {
  asideNavigation.classList.remove('hidden');
});

closeOfAside.addEventListener('click', function () {
  asideNavigation.classList.add('hidden');
});

buttonRegisterAside.addEventListener('click', function () {
  asideNavigation.classList.add('hidden');
});

listItemsOfAside.forEach(element => {
  element.addEventListener('click', function() {
    asideNavigation.classList.add('hidden');
  });
});