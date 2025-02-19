import { DOM_ELEMENTS, STATES } from './js/constants.js';

document.addEventListener('DOMContentLoaded', () => {
    initializeMenuHandlers();
});

function initializeMenuHandlers() {
    DOM_ELEMENTS.menuToggle.addEventListener('click', toggleMenu);
    document.addEventListener('click', handleOutsideClick);
}

function toggleMenu() {
    if (!STATES.isMenuOpen) {
        DOM_ELEMENTS.settingsPanel.classList.remove('hiding');
        DOM_ELEMENTS.settingsPanel.classList.add('active');
    } else {
        DOM_ELEMENTS.settingsPanel.classList.remove('active');
        DOM_ELEMENTS.settingsPanel.classList.add('hiding');
        DOM_ELEMENTS.settingsPanel.addEventListener('animationend', () => {
            DOM_ELEMENTS.settingsPanel.classList.remove('hiding');
        }, { once: true });
    }
    STATES.isMenuOpen = !STATES.isMenuOpen;
}

function handleOutsideClick(e) {
    if (STATES.isMenuOpen && !e.target.closest('.button-container')) {
        DOM_ELEMENTS.settingsPanel.classList.remove('active');
        DOM_ELEMENTS.settingsPanel.classList.add('hiding');
        STATES.isMenuOpen = false;
    }
}