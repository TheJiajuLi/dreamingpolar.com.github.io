import { DOM_ELEMENTS, STATES } from '../js/constants.js';
import { initializeEventListeners } from './event_listeners.js';

// Initialize application
initializeEventListeners();

// Core function implementations
export function toggleMenu() {
    const panel = DOM_ELEMENTS.settingsPanel;
    
    if (!STATES.isMenuOpen) {
        panel.style.display = 'flex';  // Ensure flex display
        panel.classList.remove('hiding');
        panel.classList.add('active');
    } else {
        panel.classList.remove('active');
        panel.classList.add('hiding');
        panel.addEventListener('animationend', () => {
            panel.classList.remove('hiding');
            if (!STATES.isMenuOpen) {
                panel.style.display = 'none';
            }
        }, { once: true });
    }
    STATES.isMenuOpen = !STATES.isMenuOpen;
}

export function initializeMenuHandlers() {
    // Menu initialization logic here
    console.log('Menu handlers initialized');
}

export function handleOutsideClick(e) {
    if (STATES.isMenuOpen && !e.target.closest('.button-container')) {
        DOM_ELEMENTS.settingsPanel.classList.remove('active');
        DOM_ELEMENTS.settingsPanel.classList.add('hiding');
        STATES.isMenuOpen = false;
    }
}

export function initializeMarkdown() {
    if (DOM_ELEMENTS.markdownContent) {
        DOM_ELEMENTS.markdownContent.innerHTML = marked.parse(DOM_ELEMENTS.markdownContent.textContent);
    }
}

export function initializeThemeHandlers() {
    DOM_ELEMENTS.themeButton1.addEventListener('click', () => setTheme('light'));
    DOM_ELEMENTS.themeButton2.addEventListener('click', () => setTheme('dark'));
    DOM_ELEMENTS.themeButton3.addEventListener('click', () => setTheme('high-contrast'));
}

export function setTheme(theme) {
    document.body.classList.remove('light-theme', 'dark-theme', 'high-contrast-theme');
    document.body.classList.add(`${theme}-theme`);
    STATES.currentTheme = theme;
    // Optional: save theme preference to localStorage
    localStorage.setItem('theme', theme);
}

export function updateCopyright() {
    DOM_ELEMENTS.copyright.innerHTML = `&copy; ${new Date().getFullYear()} www.dreamingpolar.com - All Rights Reserved.`;
}
