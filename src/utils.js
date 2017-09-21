export const keys = obj => Object.keys(obj)
export const map = fn => array => array.map(fn)
export const filter = fn => array => array.filter(fn)
export const sort = fn => array => array.sort(fn)
export const head = array => array[0]
export const gte = num1 => num2 => num1 >= num2
export const lte = num1 => num2 => num1 <= num2
export const asc = (a, b) => a - b
export const desc = (a, b) => b - a

export const pipe = (...props) => (...passProps) =>
  props.reduce((acc, fn) => fn(acc), ...passProps);
