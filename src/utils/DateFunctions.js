
export function dateToString(date) {
    if (!date) return '';
    const dates = date.split('T');
    if (dates.length <= 1) return '';
    return `${dates[0]} ${dates[1].substring(0, 5)}`;
}

export function dateToInput(date) {
    return date.toISOString().slice(0, 16);
}

export function fetchDateToInput(dateString) {
    const date = new Date(dateString);
    return dateToInput(date);
}

export function dateToShortString(date) {
    if (!date) return '';
    const dates = date.split('T');
    return dates[0];
}
