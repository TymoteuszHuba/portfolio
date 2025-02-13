// main function setting Hamburger Menu
function setupHamburgerMenu() {
	// get elements from website
	const hamburger = document.querySelector('.nav__hamburger');
	const navLinks = document.querySelector('.nav__links');
	const navItems = document.querySelectorAll('.nav__links-link');
	const main = document.querySelector('.main');
	const header = document.querySelector('.header');
	const navLogo = document.querySelector('.nav__logo');
	const navContact = document.querySelector('.nav__contact-link');

	// create a list of elements to blur
	const blurElements = [main, navLogo, header, navContact];

	// function which toggle elements in menu
	function toggleMenu() {
		hamburger.classList.toggle('nav__hamburger--active');
		navLinks.classList.toggle('nav__links--active');
		blurElements.forEach((element) => element?.classList.toggle('blur'));

		if (navLinks.classList.contains('nav__links--active')) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
	}

	// function which remove active, mobile and blur classes
	function closeMenu() {
		hamburger.classList.remove('nav__hamburger--active');
		navLinks.classList.remove('nav__links--active');
		blurElements.forEach((element) => element?.classList.remove('blur'));
		document.body.style.overflow = '';
	}

	// listener on hamburger to active toggleMenu function
	hamburger.addEventListener('click', toggleMenu);

	// listener on each element from navItems to invoke closeMenu function
	navItems.forEach((item) => {
		item.addEventListener('click', () => {
			if (navLinks.classList.contains('nav__links--active')) {
				closeMenu();
			}
		});
	});

	// control the size of widnow to close the menu
	window.addEventListener('resize', () => {
		if (window.innerWidth > 768) {
			closeMenu();
		}
	});
}

// function which control nav sticky efect
function navSticky() {
	const nav = document.querySelector('.nav');
	if (!nav) return;

	let stickyPoint = nav.offsetTop - 20;

	function updateStickyPoint() {
		stickyPoint = nav.offsetTop - 20;
	}

	function handleScroll() {
		if (window.scrollY > stickyPoint) {
			nav.classList.add('nav--effects');
		} else {
			nav.classList.remove('nav--effects');
		}
	}

	window.addEventListener('resize', updateStickyPoint);
	window.addEventListener('scroll', handleScroll);
}


export {setupHamburgerMenu, navSticky};
