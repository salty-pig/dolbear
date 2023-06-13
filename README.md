# dolbear
Node module and CLI for [Dolbear's Law](https://en.wikipedia.org/wiki/Dolbear's_law).

Dolbear's law states the relationship between the air temperature and the rate at which crickets chirp

Formula for Dolbear's Law. Use the number of cricket chirps to calculate the temperature. For
celsius, count the number of chirps per 8 seconds. For fahrenheit, count the number of chirps
per 15 seconds.

## CLI

Usage: dolbear [options] <number-of-chirps>

Options:
  -V, --version  output the version number
  --scale <c|f>  set the scale (fahrenheit or celsius) (default: "c")
  -h, --help     display help for command


```
$ npx dolbear --scale f 15

The estimated temperature based on your input is 55° Fahrenheit.
```

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
