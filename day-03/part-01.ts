import { input } from "./input";

const regexp = /\d+/g

const lines = input.split("\n")

const getArea = (line: number, startIndex: number, endIndex: number): string => {
  let area = ''
  for (let l = Math.max(0, line - 1); l <= Math.min(line + 1, lines.length - 1); l++) {
    const currentLine = lines[l]
    area += currentLine.substring(startIndex - 1, endIndex + 2)
  }

  return area
}

const result = lines.reduce((sum, line, lineIndex) => {
  let match: RegExpExecArray | null
  while ((match = regexp.exec(line)) !== null) {
    const num = parseInt(match[0])
    const startIndex = match.index
    const endIndex = regexp.lastIndex - 1
    const area = getArea(lineIndex, startIndex, endIndex)
    console.log(area, '=>' , area.replace(/\d+|\./gi, ''))
    if (area.replace(/\d+|\./gi, '') !== '') {
      sum += num
    }
  }

  return sum
}, 0)

console.log(result)
