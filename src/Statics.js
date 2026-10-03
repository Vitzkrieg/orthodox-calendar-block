import { __ } from "@wordpress/i18n";

// supported languages
export const languages = [
    { "label" : __("English", "orthocalbl"), "value": "en" },
    { "label" : __("Russian", "orthocalbl"), "value": "ru" }
];

// loading message
export const msgLoading = __("Loading...", "orthocalbl");

// outermost container class
export const containerClassName = "orthodox-calendar-block";

// attributes to filter out
export const badStrings = ["btn_", "text_"];

/**
 * Function to filter out values
 * @param {Array} search Array to search through
 * @param {Array} filter Array of strings to filter out withf
 * @returns Array
 */
export function filterArrayByArray(search, filter) {

    let parsedAtts = [];
    let keep = true;

    for (let key in search) {
        keep = true;
        if (search.hasOwnProperty(key)) {
            filter.every((bad) => {
                if (key.includes(bad)) {
                    keep = false;
                    return false;
                }
                return true;
            })
        }
        if (keep) {
            parsedAtts[key] = "" + search[key];
        }
    }

    return parsedAtts;
}