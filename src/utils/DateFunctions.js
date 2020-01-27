
export function dateToString(date) {
    if (!date) return '';
    const dates = date.split('T');
    if (dates.length <= 1) return '';
    return `${dates[0]} ${dates[1].substring(0, 5)}`;
}

export function dateToInput(date) {
    //const date = new Date(inDate);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    console.log(date.toISOString().slice(0, 16));
    return `${year}-${month > 9 ? '' : '0'}${month}-${day > 9 ? '' : '0'}${day}T${hour > 9 ? '' : '0'}${hour}:${minute > 9 ? '' : '0'}${minute}`;
}

export function fetchDateToInput(dateString) {
    const date = new Date(dateString);
    return date.toISOString().slice(0, 16);
}

export function dateToShortString(date) {
    if (!date) return '';
    const dates = date.split('T');
    return dates[0];
}
