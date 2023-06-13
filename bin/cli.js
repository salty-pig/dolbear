#!/usr/bin/env node
const pkg = require('../package.json');
const dolbear = require('../index.js');

const { Command } = require('commander');

const program = new Command();

program
  .version(pkg.version)
  .description(`${pkg.description} Use the number of cricket chirps to calculate the temperature. For celsius, count the number of chirps per 8 seconds. For fahrenheit, count the number of chirps per 15 seconds.`)
  .option('--scale <c|f>', 'set the scale (fahrenheit or celsius)', 'c')
  .arguments('number-of-chirps')
  .action(run);

program.parse(process.argv);

function run(chirps) {
  const programOpts = program.opts();
  switch (programOpts.scale) {
    case 'c':
      print(dolbear.Celsius(Number(chirps)), 'c');
      break;
    case 'f':
      print(dolbear.Fahrenheit(Number(chirps)), 'f');
      break;
    default:
      console.error('Invalid scale');
  }
}

function print(temp, scale) {
  let scaleName = scale == 'c' ? 'Celcius' : 'Fahrenheit';
  console.log(`The estimated temperature based on your input is ${temp}° ${scaleName}.`);
}
