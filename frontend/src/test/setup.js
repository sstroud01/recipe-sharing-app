import '@testing-library/jest-dom';

// Minimal web API shims for environments with partial globals
// jsdom usually provides these, but CI mismatches can cause gaps.
if (typeof globalThis.URL === 'undefined' && typeof URL !== 'undefined') {
	globalThis.URL = URL;
}
if (typeof globalThis.URLSearchParams === 'undefined' && typeof URLSearchParams !== 'undefined') {
	globalThis.URLSearchParams = URLSearchParams;
}
if (typeof globalThis.Headers === 'undefined') {
	// Very small stub; extend if your code asserts more behavior
	globalThis.Headers = class {};
}