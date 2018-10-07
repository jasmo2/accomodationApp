/**
 * @file filters
 * utils to validate the filters which are needed to be apply in the application
 */
import { ACTIVITY_TYPE, LOCATION_TYPE } from "../constants";

import sign from "../icons/sign.svg";
import activities from "../icons/activities.svg";

/**
 * returns based on the input
 * @function validateKey
 * @param {string} key
 */
function validateKey(key) {
    switch (key) {
        case "location":
            return "name";
        default:
            return key;
    }
}

/**
 * takes each accomodation and make it unique
 * @function filterData
 * @param {array} data
 */
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

/**
 * return object based on the input
 * @function filterType
 * @param {string} type
 */
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

/**
* filter for each criteria,
* then match if filters have common items
* is all done mimicin the App behaviour
* @function applyFilters
* @param {object} filters
* @param {object} data
*/
export function applyFilters(filters, data) {
    const filteredData = {};
    const filteredFlag = {};
    for (const key in filters) {
        const validKey = validateKey(key);
        const values = filters[key].values();
        let value = values.next().value;
        let accomodations = null;

        filteredData[validKey] = [];
        filteredFlag[validKey] = new Set();

        while (value) {
            switch (validKey) {
                case "name": {
                    accomodations = data.accomodations.filter(accomodation => {
                        return accomodation.country === value;
                    });
                    break;
                }
                case "activities": {
                    accomodations = data.accomodations.filter(accomodation => {
                        return accomodation.activities.some(activity => activity === value)
                    });

                    break;
                }
                default:
                    break;
            }
            accomodations.forEach(accomodation => {
                if (!filteredFlag[validKey].has(value)) {
                    filteredFlag[validKey].add(accomodation.name);
                    filteredData[validKey].push(accomodation);
                }
            });
            value = values.next().value;
        }
    }
    const { name, activities } = filteredData;

    if (name.length === 0 && activities.length === 0) {
        return undefined;
    } else if (name.length === 0) {
        return activities;
    } else if (activities.length === 0) {
        return name
    } else {
        const accomodations = activities.filter(accomodationActivity => {
            return name.some(accomodationActivityName => (
                accomodationActivityName.name === accomodationActivity.name
            ))
        });
        return accomodations.length > 0 ? accomodations : [];
    }
}

/**
 * return the slide number or the carousel based in the input
 * @function slideNumber
 * @param {string} type
 */
export function slideNumber(type) {
    if (type === LOCATION_TYPE) {
        return 1;
    } else if (type === ACTIVITY_TYPE) {
        return 0;
    }
}
