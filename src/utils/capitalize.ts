// https://www.30secondsofcode.org/js/s/capitalize
const capitalize = ([first, ...rest]: string, lowerRest: boolean = true) =>
  first?.toUpperCase() +
  (lowerRest ? rest.join('').toLowerCase() : rest.join(''));

export { capitalize };
