import { input } from "./input";
import { findWinningNumbers } from "./lib";

const lines = input.split("\n")
  .map(line => line.split(':')[1].trim())
  .map(line => line.split('|').map(line => line.trim()))

const result = lines.reduce((sum, line) => {
  const matches = findWinningNumbers([line[0], line[1]])
  if (matches.length > 0) {
    sum += Math.pow(2, matches.length - 1)
  }

  return sum
}, 0)

console.log(result)
