import '../css/main.css';
import {titleScrollEffects} from '../js/main.js';
import {initImages} from '../js/setImages.js';
import {
	setupHamburgerMenu,
	navSticky,
	setupNavHighlight,
	initContactHighlight,
	initContactClick,
} from './nav.js';
import {trackMouseMovement, animateHeaderOnLoad} from './header.js';
import {skillsScrollEffects} from './skills.js';
import {initProjectsEffects} from './projects.js';

document.addEventListener('DOMContentLoaded', () => {
	initImages();
	setupHamburgerMenu();
	navSticky();
	setupNavHighlight();
	initContactHighlight();
	initContactClick();
	trackMouseMovement();
	animateHeaderOnLoad();
	skillsScrollEffects();
	titleScrollEffects();
	initProjectsEffects();
});
