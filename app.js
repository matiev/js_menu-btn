const menu = document.querySelector('.menu'),
	menuLine1 = document.querySelector('.menu__line1'),
	menuLine2 = document.querySelector('.menu__line2'),
	menuLine3 = document.querySelector('.menu__line3'),
    aside = document.querySelector('.sidebar');
window.addEventListener('click', event => {
	if (event.target.closest('.menu') && 
  	!aside.closest('.shw')) {
  	    menu.classList.add('active');
        menuLine1.style.display = 'none';
        menuLine2.classList.add('rotate1');
        menuLine3.classList.add('rotate2');
        aside.classList.add('shw');
    } 
    else if (!event.target.closest('.sidebar') && 
  	aside.closest('.shw')) {
  	    menu.classList.remove('active');
        menuLine1.style.display = 'block';
        menuLine2.classList.remove('rotate1');
        menuLine3.classList.remove('rotate2');
        aside.classList.remove('shw');
    }
})