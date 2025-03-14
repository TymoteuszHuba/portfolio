import {animateHeaderText, resetHeaderAnimation} from '../js/header.js';

// function checking user localization and setup current language
function detectUserLanguage() {
	const userLang = navigator.language || navigator.userLanguage;
	return userLang.startsWidth('pl') ? 'pl' : 'en';
}

// Get actual language from localStoreg or setup based on localization
function getCurrentLang() {
	let storedLang = localStorage.getItem('language');
	if (!storedLang) {
		storedLang = detectUserLanguage();
		localStorage.setItem('language', storedLang);
	}
	return storedLang;
}

// setup language on website and save into localStorage
function setLanguage(newLang) {
	localStorage.setItem('language', newLang);
	document.documentElement.lang = newLang;
	loadTranslations();
}

// load translations for correct language
function loadTranslations() {
	const lang = getCurrentLang();
	// document.documentElement.lang = lang;

	import(`../locales/${lang}.json`)
		.then((translations) => {
			applyTranslations(translations.default);
			// updateLangButton(lang);

			resetHeaderAnimation();
			// invoke function for header text animation
			animateHeaderText(translations.default.header.words); // Pass the words array
		})
		.catch((error) => console.error('Błąd ładowania tłumaczeń:', error));
}

// setup translations for elements with atributes data-i18n
function applyTranslations(translations) {
	document.querySelectorAll('[data-i18n]').forEach((element) => {
		const key = element.getAttribute('data-i18n');
		const keys = key.split('.');
		let value = translations;

		keys.forEach((k) => {
			if (value && k in value) {
				value = value[k];
			} else {
				console.warn(`⚠️ Brak tłumaczenia dla klucza: ${key}`);
				value = null;
			}
		});

		if (value) {
			element.innerText = value;
		}
	});
}

export {getCurrentLang, setLanguage, loadTranslations};
