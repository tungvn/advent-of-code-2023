// Game 1: 1 blue, 2 red; 1 green, 2 blue, 1 red; 1 red, 5 green; 3 red, 2 blue, 8 green; 3 blue, 2 red, 4 green; 2 blue, 4 green, 3 red

export const extractGameData = (str: string): [number, Record<string, number>] => {
  const gameId = str.split(':')[0].trim().match(/\d+/g)![0]
  const gameStr = str.split(':')[1].trim()

  const gameArr = gameStr.split(';').map((value) => {
    return value.trim().split(',').map((value) => {
      const matched = value.trim().split(' ')
      return { [matched![1]]: parseInt(matched![0]) }
    }).reduce((carry, turns) => ({ ...carry, ...turns }), {})
  }).reduce((carry, turn) => {
    return {
      ...carry,
      blue: carry.blue < turn.blue ? turn.blue : carry.blue,
      red: carry.red < turn.red ? turn.red : carry.red,
      green: carry.green < turn.green ? turn.green : carry.green,
    }
  }, { blue: 0, red: 0, green: 0 })

  return [parseInt(gameId), gameArr]
}