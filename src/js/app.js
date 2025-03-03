import '../css/main.css';
import {titleScrollEffects} from '../js/main.js';
import {initImages} from '../js/setImages.js';
import {
	setupHamburgerMenu,
	navSticky,
	setupNavHighlight,
	initLangHighlight,
	initLangClick,
	toggleLangButtonText,
} from './nav.js';
import {trackMouseMovement, animateHeaderOnLoad} from './header.js';
import {skillsScrollEffects} from './skills.js';
import {initProjectsEffects} from './projects.js';
import {loadTranslations, getCurrentLang} from './lang.js';

document.addEventListener('DOMContentLoaded', () => {
	loadTranslations();
	initImages();
	setupHamburgerMenu();
	navSticky();
	setupNavHighlight();
	initLangHighlight();
	initLangClick();
	toggleLangButtonText(getCurrentLang(), false);
	trackMouseMovement();
	animateHeaderOnLoad();
	skillsScrollEffects();
	titleScrollEffects();
	initProjectsEffects();
});
