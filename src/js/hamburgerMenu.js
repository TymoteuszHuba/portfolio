// main function setting Hamburger Menu
function setupHamburgerMenu() {
	// get elements from website
	const hamburger = document.querySelector('.nav-hamburger');
	const navLinks = document.getElementById('navLinks');
	const navItems = document.querySelectorAll('#navLinks a');
	const main = document.querySelector('.main');
	const navLogo = document.querySelector('.nav-logo');
	const navContact = document.querySelector('.nav-right');

	// create a list of elements to blur
	const blurElements = [main, navLogo, navContact];

	// function which toggle elements in menu
	function toggleMenu() {
		hamburger.classList.toggle('active');
		navLinks.classList.toggle('mobile');
		navLinks.classList.toggle('active');
		blurElements.forEach((element) => element?.classList.toggle('blur'));
	}

	// function which remove active, mobile and blur classes
	function closeMenu() {
		hamburger.classList.remove('active');
		navLinks.classList.remove('mobile');
		navLinks.classList.remove('active');
		blurElements.forEach((element) => element?.classList.remove('blur'));
	}

	// listener on hamburger to active toggleMenu function
	hamburger.addEventListener('click', toggleMenu);

	// listener on each element from navItems to invoke closeMenu function
	navItems.forEach((item) => {
		item.addEventListener('click', () => {
			if (navLinks.classList.contains('mobile')) {
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

export {setupHamburgerMenu};
