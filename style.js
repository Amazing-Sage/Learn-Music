// nav bar js (3/29)//
const navSide = () => {

  const burger = document.querySelector('.burger');
  const navLinks = document.querySelectorAll('.nav-links')

  //toggle nav
  burger.addEventListner('click', () => {

    if('click'){
      navLinks.classList.toggle('show');
    }
    
  });
  
  //animate links
  navLinks.forEach((link,index)=> {

    link.style.animation = 'navLinks 0.5s ease forwards $(index/7)s';
    
    consol.log`(index/7 + 0.7)s`;
    
  });
  
  //burger animate (4/04)// 
  
  burger.classList.toggle('toggle');
}




