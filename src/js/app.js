import '../css/main.css'; // Importowanie pliku SCSS
import {initImages} from '../js/setImages.js';
import {setupHamburgerMenu, navSticky, setupNavHighlight} from './nav.js';
import {trackMouseMovement} from './header.js';
import {skillsScrollEffects, titleScrollEffects} from './skills.js';

document.addEventListener('DOMContentLoaded', () => {
	initImages();
	setupHamburgerMenu();
	navSticky();
	setupNavHighlight();
	trackMouseMovement();
	skillsScrollEffects();
	titleScrollEffects();
});
