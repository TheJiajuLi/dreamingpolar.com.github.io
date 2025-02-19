import { DOM_ELEMENTS } from '../js/constants.js';
import { toggleMenu, handleOutsideClick, initializeThemeHandlers, updateCopyright } from './main.js';

export function initializeEventListeners() {
    // DOM Content Loaded event
    document.addEventListener('DOMContentLoaded', () => {
        initializeThemeHandlers();
        // Load saved theme if exists
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.body.classList.add(`${savedTheme}-theme`);
        updateCopyright();
    });

    // Menu related events
    DOM_ELEMENTS.menuToggle.addEventListener('click', toggleMenu);
    document.addEventListener('click', handleOutsideClick);

    // Settings toggle event
    DOM_ELEMENTS.settingsToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
        console.log('Menu toggled'); // For debugging
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.button-container') && 
            DOM_ELEMENTS.settingsPanel.classList.contains('active')) {
            toggleMenu();
        }
    });
}

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