import { input } from "./inputs"
import { extractGameData, extractMaximumGameData } from "./lib"

const games = input.split('\n').map((value) => {
  return extractGameData(value)
})

const result = games.reduce((sum, [_index, games]) => {
  const game = extractMaximumGameData(games)
  return sum + game.blue * game.green * game.red
}, 0)

console.log(result)
