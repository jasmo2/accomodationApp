import { SAVE_LIKES, UNSAVE_LIKES } from "../../constants";
export const saveLikes = name => ({
    type: SAVE_LIKES,
    payload: name
});

export const unsaveLikes = name => ({
    type: UNSAVE_LIKES,
    payload: name
});