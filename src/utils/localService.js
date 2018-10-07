/**
 * Parse saved data in local storage
 * @function loadState
 */
export function loadState() {
    try {
        const serializedState = localStorage.getItem("state");
        if (!serializedState) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
}

/**
 * serialize state if posible
 * @function saveState
 * @param {object} state
 */
export function saveState(state) {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("state", serializedState);
    } catch (error) {
        console.err(error);
    }
}