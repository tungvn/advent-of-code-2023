import { inputs } from "./input"
import { getFirstNumber, getLastNumber } from "./lib"

export const getCalibrationValue = (str: string) => {
  let firstValue: number | undefined = getFirstNumber(str)
  let lastValue: number | undefined = getLastNumber(str)

  return firstValue! * 10 + lastValue!
}

const result = inputs.split('\n').reduce(function (sum, str) {
  return sum += getCalibrationValue(str)
}, 0)

console.log(result)
