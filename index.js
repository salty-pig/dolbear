'use strict';

function dolbearTempFahrenheit (numberOfCricketsPer15Seconds) {
  return numberOfCricketsPer15Seconds + 40;
}

function dolbearTempCelcius (numberOfCricketsPer8Seconds) {
  return numberOfCricketsPer8Seconds + 5;
}

module.exports = {
  Fahrenheit: dolbearTempFahrenheit,
  Celcius: dolbearTempCelcius
};
