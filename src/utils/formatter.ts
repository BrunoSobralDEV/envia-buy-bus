export function fahrenheitToCelsius(fahrenheit: number) {
  const fToCel = (fahrenheit - 32) * 5 / 9;
  return fToCel.toFixed();
}