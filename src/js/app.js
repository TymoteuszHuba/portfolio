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
	initIconTheme,
} from './nav.js';
// import {animateHeaderText} from '../js/header.js';
import {trackMouseMovement, animateHeaderOnLoad} from './about.js';
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
	initIconTheme();
	trackMouseMovement();
	// animateHeaderOnLoad();
	// skillsScrollEffects();
	titleScrollEffects();
	initProjectsEffects();
});
