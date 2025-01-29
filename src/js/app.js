import '../css/main.css'; // Importowanie pliku SCSS
import {initImages} from '../js/setImages.js';
import {setupHamburgerMenu} from '../js/hamburgerMenu.js';

document.addEventListener('DOMContentLoaded', () => {
	initImages();
	setupHamburgerMenu();
});
