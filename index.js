'use strict';

function dolbearTempFahrenheit (numberOfCricketsPer15Seconds) {
  return numberOfCricketsPer15Seconds + 40;
}

function dolbearTempCelsius (numberOfCricketsPer8Seconds) {
  return numberOfCricketsPer8Seconds + 5;
}

module.exports = {
  Fahrenheit: dolbearTempFahrenheit,
  Celsius: dolbearTempCelsius
};
