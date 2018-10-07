import { SAVE_LIKES, UNSAVE_LIKES } from "../../constants";

/**
 *
 * @param {string} name
 */
export const saveLikes = name => ({
    type: SAVE_LIKES,
    payload: name
});

/**
 *
 * @param {string} name
 */
export const unsaveLikes = name => ({
    type: UNSAVE_LIKES,
    payload: name
});