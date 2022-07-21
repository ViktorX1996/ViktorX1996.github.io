export function getDate(num) {
    let date = new Date(num * 1000);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    return day + "." + (month < 10 ? '0' + month : month) + "." + year;
}
export function getTime(num) {
    let date = new Date(num * 1000);
    date.toUTCString();
    let hours = date.getUTCHours();
    return (hours < 10 ? '0' + hours : hours)
}
