import { input } from "./inputs"
import { extractGameData } from "./lib"

const games = input.split('\n').map((value) => {
  return extractGameData(value)
})

const POSSIBLE_GAME = {
  blue: 14,
  green: 13,
  red: 12
}

const result = games.reduce((sum, [index, game]) => {
  if (game.blue <= POSSIBLE_GAME.blue && game.green <= POSSIBLE_GAME.green && game.red <= POSSIBLE_GAME.red) {
    return sum + index
  }

  return sum
}, 0)

console.log(result)
