'use strict';

// Testing 'Prettier' single Quotes!!!
// console.log('Hello World');
// const x = 'Hello World';

// const calcAge = birthYear => 2037 - birthYear;

const measureKelvin = function () {
  const measurment = {
    type: 'temp',
    unit: 'celsius',
    value: prompt('Deegrees celsius: '),
  };

  const kelvin = measurment.value + 273;
  return kelvin;
};

console.log(measureKelvin());
