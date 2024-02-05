'use strict';

// Testing 'Prettier' single Quotes!!!
// console.log('Hello World');
// const x = 'Hello World';

// const calcAge = birthYear => 2037 - birthYear;

// const measureKelvin = function () {
//   const measurment = {
//     type: 'temp',
//     unit: 'celsius',

//     // C) FIX; The wrong version of code: value: prompt('Degrees celsius: ') and it returned value as a string but adding Number() function we fix it!
//     value: Number(prompt('Degrees celsius: ')),
//   };

//   // B) FIND
//   console.table(measurment);

//   const kelvin = measurment.value + 273;
//   return kelvin;
// };

// A) IDENTIFY
// console.log(measureKelvin());

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const calcTemp = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max);
//   console.log(min);
//   return max - min;
// };

// // calcTemp([3, 7, 4, 20, 1.5, 'error', 1, 22]);
// const amplitude = calcTemp(temperatures);
// console.log(amplitude);

// // Problem 2

// const calcTempNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max);
//   console.log(min);
//   return max - min;
// };

// // calcTemp([3, 7, 4, 20, 1.5, 'error', 1, 22]);
// const amplitudeNew = calcTempNew([2, 4, 6], [8, 11, 15]);
// console.log(amplitudeNew);

// Using a debugger

// const calcTempNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = 0;
//   let min = 0;

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   // console.log(min);
//   return max - min;
// };

// const amplitudeNew = calcTempNew([2, 4, 6], [8, 11, 15]);
// console.log(amplitudeNew);

// Coding Challenge #1

const printForecast = function (temps) {
  let str = '';

  for (let i = 0; i < temps.length; i++) {
    str = str + `${temps[i]}°C in day ${i + 1} ... `;
    // Wrong version of our problem
    // console.log(`${temps[i]}°C in day ${i + 1} ...`);
  }

  console.log(str);
};

printForecast([12, 5, -5, 0, 4]);
