//given array with objects with days and temperatures

// const arr = [
//     {
//         day: 22,
//         min: 10,
//         max: 10,
//     },
//     {
//         day: 22,
//         min: 25,
//         max: 25,
//     },
//     {
//         day: 22,
//         min: 40,
//         max: 40,
//     },
//     {
//         day: 23,
//         min: 12,
//         max: 12,
//     },
//     {
//         day: 23,
//         min: 15,
//         max: 15,
//     },
// ]


export function divideObjectsByDay(arr){
    let result = [];
    arr.forEach(item => {
        // debugger;
        if(!result[item.day]){
            result[item.day] = {
                day: item.day,
                min: item.min,
                max: item.max,
                logo: item.logo.replace(/n/gi,'d'),
            }
        } else {
            result[item.day].min = Math.min(result[item.day].min, item.min);
            result[item.day].max = Math.max(result[item.day].max, item.max);
        }
    }
    )
    return Object.values(result); // 22.07.2022: {day: '22.07.2022', min: 18, max: 20} -> 0: {day: '22.07.2022', min: 18, max: 20} (0 нумерация в браузере)
}


// export function iterate(days) {
//     let arr = []
//     for (let values in days) {
//         if (days.hasOwnProperty(values)) {
//             arr.push(days[values])
//         }
//     }
//     return arr
// }


// console.log(divideObjectsByDay(arr));
// console.log(keyWithBiggestMinMax(arr));