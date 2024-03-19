const convertToCelsius = function(deg) {
  const degCelsius = ((deg - 32)*(5/9));
  return +degCelsius.toFixed(1)
};

const convertToFahrenheit = function(deg) {
  const degFahrenheit = (deg * (9/5) + 32);
  return +degFahrenheit.toFixed(1)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
