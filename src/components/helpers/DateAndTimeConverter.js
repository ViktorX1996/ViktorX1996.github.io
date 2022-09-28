export function getDate(timestamp) {
    let date = new Date(timestamp * 1000);
    let day = date.getUTCDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    return day + "." + (month < 10 ? '0' + month : month) + "." + year;
}
export function getTime(timestamp) {
    let date = new Date(timestamp * 1000);
    date.toUTCString();
    let hours = date.getUTCHours();
    return (hours < 10 ? '0' + hours : String(hours))
}
export function getFullTime(timestamp) {
    let date = new Date(timestamp * 1000);
    date.toUTCString();
    let hours = date.getUTCHours();
    let minutes = date.getUTCMinutes();
    return (hours < 10 ? '0' + hours : String(hours)) + ":" + (minutes < 10 ? '0' + minutes : String(minutes));
}
export function getDay(timestamp) {
    let date = new Date(timestamp * 1000);
    let day = date.getUTCDate();
    return day;
}
