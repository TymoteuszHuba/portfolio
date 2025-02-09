import '../css/main.css'; // Importowanie pliku SCSS
import {initImages} from '../js/setImages.js';
import {setupHamburgerMenu, navSticky} from './nav.js';
import {trackMouseMovement} from './header.js';

document.addEventListener('DOMContentLoaded', () => {
	initImages();
	setupHamburgerMenu();
	navSticky();
	trackMouseMovement();
});
