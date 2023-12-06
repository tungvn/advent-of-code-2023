import { input } from "./input";

const regexp = /\*/g
const lines = input.split("\n")

const findAdjacentNumbers = (lineIndex: number, index: number): number[] => {
  const previousLine = lineIndex === 0 ? '' : lines[lineIndex - 1]
  const currentLine = lines[lineIndex]
  const nextLine = lineIndex === lines.length - 1 ? '' : lines[lineIndex + 1]

  let numbers: number[] = []
  let match: RegExpExecArray | null
  const numberRegexp = /\d+/g
  if (previousLine) {
    while ((match = numberRegexp.exec(previousLine)) !== null) {
      if (match.index <= index + 1 && numberRegexp.lastIndex >= index) {
        numbers.push(parseInt(match[0]))
      }
    }
  }

  if (nextLine) {
    while ((match = numberRegexp.exec(nextLine)) !== null) {
      if (match.index <= index + 1 && numberRegexp.lastIndex >= index) {
        numbers.push(parseInt(match[0]))
      }
    }
  }

  while ((match = numberRegexp.exec(currentLine)) !== null) {
    if (match.index === index + 1 || numberRegexp.lastIndex === index) {
      numbers.push(parseInt(match[0]))
    }
  }

  return numbers
}

const result = lines.reduce((sum, line, lineIndex) => {
  let match: RegExpExecArray | null
  while ((match = regexp.exec(line)) !== null) {
    const numbers = findAdjacentNumbers(lineIndex, match.index)
    if (numbers.length === 2) {
      sum += numbers[0] * numbers[1]
    }
  }

  return sum
}, 0)

console.log(result)

