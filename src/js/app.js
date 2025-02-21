import '../css/main.css'; // Importowanie pliku SCSS
import {initImages} from '../js/setImages.js';
import {
	setupHamburgerMenu,
	navSticky,
	setupNavHighlight,
	initContactHighlight,
	initContactClick,
} from './nav.js';
import {trackMouseMovement} from './header.js';
import {skillsScrollEffects, titleScrollEffects} from './skills.js';
import {initProjectsEffects} from './projects.js';

document.addEventListener('DOMContentLoaded', () => {
	initImages();
	setupHamburgerMenu();
	navSticky();
	setupNavHighlight();
	initContactHighlight();
	initContactClick();
	trackMouseMovement();
	skillsScrollEffects();
	titleScrollEffects();
	initProjectsEffects();
});
