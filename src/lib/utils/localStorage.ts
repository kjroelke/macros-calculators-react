import type { AppState } from "../types/types.app";

export const LOCAL_STORAGE_KEY = 'macros-calculator-state';

export function saveStateToLocalStorage(state: AppState) {
    const expiresAt = Date.now() + 7 * 24 * 60 * 60 * 1000; // 1 week from now
    const stateWithExpiry = {
        state,
        expiresAt
    };
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(stateWithExpiry));
}

export function loadStateFromLocalStorage(): AppState | null {
    const storedState = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!storedState) return null;

    try {
        const { state, expiresAt } = JSON.parse(storedState);
        if (Date.now() > expiresAt) {
            localStorage.removeItem(LOCAL_STORAGE_KEY);
            return null;
        }
        return state;
    } catch (error) {
        console.error('Error loading state from localStorage:', error);
        localStorage.removeItem(LOCAL_STORAGE_KEY);
        return null;
    }
}

export function clearStateFromLocalStorage() {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
}
