'use strict';

// toFahrenheit :: Number -> Number
//
// Convert degrees Celsius to degrees Fahrenheit.
//
// > toFahrenheit(0)
// 32
// > toFahrenheit(100)
// 211
function toFahrenheit(degreesCelsius) {
    return degreesCelsius * 9 / 5 + 32;
}