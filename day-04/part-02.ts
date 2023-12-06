import { input } from "./input";
import { findWinningNumbers } from "./lib";

const lines = input.split("\n")
  .map(line => line.split(':')[1].trim())
  .map(line => line.split('|').map(line => line.trim()))

let countArr: number[] = Array.from(lines).map(() => 1)

lines.forEach((line, index) => {
  const matches = findWinningNumbers([line[0], line[1]])
  console.log(`Card ${index + 1} wins ${matches.length} card(s): ${Array.from(matches).map((_, i) => index + 1 + i + 1).join(', ')}`)
  if (matches.length > 0) {
    for (let i = index + 1; i <= index + matches.length; i++) {
      if (i < countArr.length) {
        countArr[i] += countArr[index]
      }
    }
  }
})

const result = countArr.reduce((sum, count) => (sum + count), 0)

console.log(result)
