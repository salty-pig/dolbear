# dolbear
Node module for [Dolbear's Law](https://en.wikipedia.org/wiki/Dolbear's_law).

Dolbear's law states the relationship between the air temperature and the rate at which crickets chirp


## API

For the temperature in Fahrenheit:

```
const dolbear = require('dolbear');

const numberOfCricketChirpsPer15Seconds = 5;
const temperature = dolbear.Fahrenheit(numberOfCricketChirpsPer15Seconds);

console.log(temperature); // 45
```

For the temperature in Celsius:

```
const dolbear = require('dolbear');

const numberOfCricketChirpsPer8Seconds = 5;
const temperature = dolbear.Celsius(numberOfCricketChirpsPer8Seconds);

console.log(temperature); // 10
```
