/* Preload config — fires during the hero loader phase.
   Fetches content JSONs and key images into browser cache
   so first navigation is instant with no extra network round-trips. */

const BASE = window.BASE || '';

const CONTENT_JSON = [
  `${BASE}/content_pages/tutorials/python_with_mathematics/sympy/sympy_tutorials.json`,
  `${BASE}/content_pages/tutorials/python_with_mathematics/pandas/pandas_tutorials.json`,
  `${BASE}/content_pages/tutorials/python_with_mathematics/matplotlib/matplotlib_tutorials.json`,
];

const IMAGES = [
  `${BASE}/assets/app_logo/dreaming_polar.png`,
  `${BASE}/assets/buttons/ai.png`,
];

function prefetch(urls) {
  urls.forEach(url => {
    fetch(url, { priority: 'low' }).catch(() => {});
  });
}

function preloadImages(urls) {
  urls.forEach(src => {
    const img = new Image();
    img.src = src;
  });
}

/* Run after initial render so it doesn't compete with critical resources */
requestIdleCallback
  ? requestIdleCallback(() => { prefetch(CONTENT_JSON); preloadImages(IMAGES); }, { timeout: 3000 })
  : setTimeout(() => { prefetch(CONTENT_JSON); preloadImages(IMAGES); }, 1000);
