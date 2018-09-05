import { SAVE_LIKES, UNSAVE_LIKES } from "../../constants";
export const saveLikes = country => ({
    type: SAVE_LIKES,
    payload: country
});

export const unsaveLikes = country => ({
    type: UNSAVE_LIKES,
    payload: country
});