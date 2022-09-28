


export const numToColor = (...args) => {
  const [aqi, pm10, pm25, ozone, co, so2, no2] = args;
  // let aqi, pm10, pm25, ozone, uvi;
  // for (let i = 0; i < args.length; i++) {
  //   aqi = args[i].aqi;
  //   pm10 = args[i].pm10;
  //   pm25 = args[i].pm25;
  //   uvi = args[i].uvi;
  //   ozone = args[i].ozone;
  // }
  // console.log(aqi, pm10, pm25, ozone, co, so2, no2, 'GET INTO numToColor');
  // let veryGood = '#009966';
  let neutral = '#ffffff';
  let good = '#009966';
  let moderate = '#ffde33';
  let bad = '#ff9933';
  let veryBad = '#cc0033';
  let dangerous = '#660099';
  let arrOfColors = []

  aqi <= 50 ? arrOfColors.push({ 'aqi': good }) : aqi <= 100 ? arrOfColors.push({ 'aqi': moderate }) : aqi <= 150 ? arrOfColors.push({ 'aqi': bad }) : aqi <= 200 ? arrOfColors.push({ 'aqi': veryBad }) : aqi <= 300 ? arrOfColors.push({ 'aqi': veryBad }) : aqi <= 400 ? arrOfColors.push({ 'aqi': dangerous }) : arrOfColors.push({ 'aqi': null });
  pm10 <= 54 ? arrOfColors.push({ 'pm10': good }) : pm10 <= 154 ? arrOfColors.push({ 'pm10': moderate }) : pm10 <= 254 ? arrOfColors.push({ 'pm10': bad }) : pm10 <= 354 ? arrOfColors.push({ 'pm10': veryBad }) : pm10 <= 424 ? arrOfColors.push({ 'pm10': veryBad }) : pm10 <= 605 ? arrOfColors.push({ 'pm10': dangerous }) : arrOfColors.push({ 'pm10': null });
  pm25 <= 15 ? arrOfColors.push({ 'pm25': good }) : pm25 <= 40 ? arrOfColors.push({ 'pm25': moderate }) : pm25 <= 65 ? arrOfColors.push({ 'pm25': bad }) : pm25 <= 150 ? arrOfColors.push({ 'pm25': veryBad }) : pm25 <= 250 ? arrOfColors.push({ 'pm25': veryBad }) : pm25 <= 250 ? arrOfColors.push({ 'pm25': dangerous }) : arrOfColors.push({ 'pm25': null });
  ozone <= 50 ? arrOfColors.push({ 'ozone': good }) : ozone <= 75 ? arrOfColors.push({ 'ozone': moderate }) : ozone <= 125 ? arrOfColors.push({ 'ozone': bad }) : ozone <= 150 ? arrOfColors.push({ 'ozone': veryBad }) : ozone <= 374 ? arrOfColors.push({ 'ozone': veryBad }) : ozone <= 400 ? arrOfColors.push({ 'ozone': dangerous }) : arrOfColors.push({ 'ozone': null });
  co <= 1.5 ? arrOfColors.push({ 'co': good }) : co <= 10 ? arrOfColors.push({ 'co': moderate }) : co <= 17 ? arrOfColors.push({ 'co': bad }) : co <= 34 ? arrOfColors.push({ 'co': veryBad }) : co <= 35 ? arrOfColors.push({ 'co': dangerous }) : arrOfColors.push({ 'co': null });
  // so2 <= 0.034 ? arrOfColors.push({ 'so2': good }) : so2 <= 0.144 ? arrOfColors.push({ 'so2': moderate }) : so2 <= 0.224 ? arrOfColors.push({ 'so2': bad }) : so2 <= 0.304 ? arrOfColors.push({ 'so2': veryBad }) : so2 <= 0.6 ? arrOfColors.push({ 'so2': dangerous }) : arrOfColors.push({ 'so2': null });
  so2 >= 0.03 ? arrOfColors.push({ 'so2': neutral }) :  arrOfColors.push({ 'so2': null }) 
  no2 <= 25 ? arrOfColors.push({ 'no2': good }) : no2 <= 50 ? arrOfColors.push({ 'no2': moderate }) : no2 <= 75 ? arrOfColors.push({ 'no2': bad }) : no2 <= 100 ? arrOfColors.push({ 'no2': veryBad }) : so2 <= 150 ? arrOfColors.push({ 'so2': dangerous }) : arrOfColors.push({ 'so2': null });
  // console.log(arrOfColors);
  return arrOfColors;
}
// numToColor({aqi: 100, pm10: 54, pm25: 152, ozone: 64, uvi: 2});