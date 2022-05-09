// nav bar js (3/29)//
const navActive= document.querySelector('.nav-active');
const burger = document.querySelector('.burger');
const menuItem = document.querySelectorAll('.menu-item');

// toggle nav
burger.addEventListner('click', () => {
  if ('click') {
    menuItem.classList.toggle('show');
  }
});

// animate links
menuItem.forEach((link, index) => {
  link.style.animation = 'menuItem 0.5s ease forwards $(index/7)s';

  consol.log`(index/7 + 0.7)s`;
});

// burger animate (4/04)//

burger.classList.toggle('toggle');




