export function fahrenheitToCelsius(fahrenheit: number) {
  const fToCel = (fahrenheit - 32) * 5 / 9;
  return fToCel.toFixed();
}

export function toUpperCaseFirstLetter(value: string) {
  return value[0].toUpperCase() + value.substring(1);
}