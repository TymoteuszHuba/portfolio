import {gsap} from 'gsap';

// get elements from website
const hamburger = document.querySelector('.nav__hamburger');
const nav = document.querySelector('.nav');
const navLinks = document.querySelector('.nav__links');
const navItems = document.querySelectorAll('.nav__links-link');
const main = document.querySelector('.main');
const header = document.querySelector('.header');
const navLogo = document.querySelector('.nav__logo');
const navContact = document.querySelector('.nav__contact-link');
const highlight = navContact.querySelector('.nav__contact-link--highlight');
const sections = document.querySelectorAll('section');

// create a list of elements to blur
const blurElements = [main, navLogo, header, navContact];

// function which control hamburger menu for small screens
function setupHamburgerMenu() {
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
	navItems.forEach((item) => item.addEventListener('click', closeMenu));

	// control the size of widnow to close the menu
	window.addEventListener('resize', () => {
		if (window.innerWidth > 768) {
			closeMenu();
		}
	});
}

// function which control nav sticky efect
function navSticky() {
	if (!nav) return;
	let stickyPoint = nav.offsetTop - 20;

	// function which toggle nav effects
	const updateSticky = () => {
		nav.classList.toggle('nav--effects', window.scrollY > stickyPoint);
	};

	// listener on window of resize nad scroll
	window.addEventListener('resize', () => (stickyPoint = nav.offsetTop - 20));
	window.addEventListener('scroll', updateSticky);
}

// function which control effects on nav link elements
function setupNavHighlight() {
	const highlightNav = () => {
		const scrollY = window.scrollY;
		const windowHeight = window.innerHeight;
		const headerBottom = header.offsetHeight;

		// remove all effects when user is in header
		if (scrollY < headerBottom) {
			navItems.forEach((link) => link.classList.remove('active'));
			return;
		}

		// get position for each section
		sections.forEach((section) => {
			const rect = section.getBoundingClientRect();
			const sectionTop = scrollY + rect.top;
			const sectionHeight = section.offsetHeight;

			// check if screen center is in correct section
			// if yes, then remove all effects and set for correct section
			if (
				scrollY >= sectionTop - windowHeight / 2 &&
				scrollY < sectionTop + sectionHeight - windowHeight / 2
			) {
				navItems.forEach((link) => {
					link.classList.remove('active');
					if (link.getAttribute('href') === `#${section.id}`) {
						link.classList.add('active');
					}
				});
			}
		});
	};

	// setting highlight for nav elements just for scrrens above 991 px
	// also control the size of screen
	const handleResize = () => {
		if (window.innerWidth > 991) {
			window.addEventListener('scroll', highlightNav);
		} else {
			window.removeEventListener('scroll', highlightNav);
			navItems.forEach((link) => link.classList.remove('active'));
		}
	};

	// make sure that change screen
	window.addEventListener('resize', handleResize);
	handleResize();
}

// contact highlight
function initContactHighlight() {
	// checking if elements exist
	if (!navContact || !highlight) return;

	// listener on mouse hover on contact link
	navContact.addEventListener('mouseenter', (e) => {
		// taking size and position of element based on browser view
		const rect = navContact.getBoundingClientRect();
		// calc cursor position
		const xPercent = ((e.clientX - rect.left) / rect.width) * 100;
		const yPercent = ((e.clientY - rect.top) / rect.height) * 100;

		// Setting the initial animation state
		gsap.set(highlight, {clipPath: `circle(10% at ${xPercent}% ${yPercent}%)`});
		// animate the expansion of the circle - 150%
		gsap.to(highlight, {
			clipPath: `circle(150% at ${xPercent}% ${yPercent}%)`,
			duration: 0.5,
			// ease: causes the animation to slow down towards the end, giving a smooth finish to the movement
			ease: 'power2.out',
		});
	});

	// listening for an event when the cursor leaves the element area
	navContact.addEventListener('mouseleave', (e) => {
		const rect = navContact.getBoundingClientRect();
		const xPercent = ((e.clientX - rect.left) / rect.width) * 100;
		const yPercent = ((e.clientY - rect.top) / rect.height) * 100;
		// animate the effect reversal - the circle narrows to zero
		gsap.to(highlight, {
			clipPath: `circle(0% at ${xPercent}% ${yPercent}%)`,
			duration: 0.5,
			ease: 'power2.out',
		});
	});
}

export {setupHamburgerMenu, navSticky, setupNavHighlight, initContactHighlight};
