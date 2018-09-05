import { ACTIVITY_TYPE, LOCATION_TYPE } from "../constants";

import sign from "../icons/sign.svg";
import activities from "../icons/activities.svg";

export function filterData(data) {
    const activities = new Set();
    const locations = new Set();
    for (const accomodation of data.accomodations) {
        accomodation.activities.forEach(activity => {
            activities.add(activity);
        });
        locations.add(accomodation.country);
    }
    return {
        activities: Array.from(activities),
        location: Array.from(locations)
    }
}

export function filterType(type) {
    let typeStr = "";
    let icon = null;
    switch (type) {
        case ACTIVITY_TYPE:
            typeStr = "activities"
            icon = activities;
            break;
        case LOCATION_TYPE:
            typeStr = "location"
            icon = sign;
            break;
        default:
            break;
    }
    return { typeStr, icon };
}