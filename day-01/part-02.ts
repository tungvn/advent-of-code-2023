import { inputs } from './input'
import { getFirstNumber } from './lib'

const CALIBRATIONS: Record<string, number> = {
  'one': 1,
  'two': 2,
  'three': 3,
  'four': 4,
  'five': 5,
  'six': 6,
  'seven': 7,
  'eight': 8,
  'nine': 9
}

const getCalibrationValue = (str: string) => {
  const newStr = str.replace(/(one|two|three|four|five|six|seven|eight|nine)/gi, (matched: string) => {
    return CALIBRATIONS[matched] as unknown as string
  })

  const reverseStr = str.split('').reverse().join('').replace(/(eno|owt|eerht|ruof|evif|xis|neves|thgie|enin)/gi, (matched: string) => {
    return CALIBRATIONS[matched.split('').reverse().join('')] as unknown as string
  })

  const firstValue = getFirstNumber(newStr)
  const lastValue = getFirstNumber(reverseStr)

  return firstValue! * 10 + lastValue!
}

const result = inputs.split('\n').reduce((sum, value) => {
  return sum += getCalibrationValue(value)
}, 0)

console.log(result)
