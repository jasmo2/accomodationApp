import { ACTIVITY_TYPE, LOCATION_TYPE } from "../constants";

import sign from "../icons/sign.svg";
import activities from "../icons/activities.svg";

function validateKey(key) {
    switch (key) {
        case "location":
            return "name";
        default:
            return key;
    }
}

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
        case "activities":
            typeStr = "activities"
            icon = activities;
            break;
        case LOCATION_TYPE:
        case "location":
            typeStr = "location"
            icon = sign;
            break;
        default:
            break;
    }
    return { typeStr, icon };
}

/*
* filter for each criteria,
* then match if filters have common items
*/
export function applyFilters(filters, data) {
    const filteredData = {};
    const filteredFlag = {};
    for (const key in filters) {
        const validKey = validateKey(key);
        filteredData[validKey] = [];
        filteredFlag[validKey] = new Set();
        for (const accomodation of data.accomodations) {
            switch (validKey) {
                case "name": {
                    if (!filteredFlag[validKey].has(accomodation.name)) {
                        filteredFlag[validKey].add(accomodation.name);
                        filteredData[validKey].push(accomodation)
                    }
                    break;
                }

                case "activities": {
                    const name = accomodation.name;
                    for (let i = 0; i < accomodation.activities; i++) {
                    }
                    break;
                }
                default:
                    break;
            }

        }
    }

    return filterData;

}


export function slideNumber(type) {
    if (type === LOCATION_TYPE) {
        return 1;
    } else if (type === ACTIVITY_TYPE) {
        return 0;
    }
}
