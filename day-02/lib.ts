// Game 1: 1 blue, 2 red; 1 green, 2 blue, 1 red; 1 red, 5 green; 3 red, 2 blue, 8 green; 3 blue, 2 red, 4 green; 2 blue, 4 green, 3 red

export const extractGameData = (str: string): [number, Record<string, number>[]] => {
  const gameId = str.split(':')[0].trim().match(/\d+/g)![0]
  const gameStr = str.split(':')[1].trim()

  const gameArr = gameStr.split(';').map((value) => {
    return value.trim().split(',').map((value) => {
      const matched = value.trim().split(' ')
      return { [matched![1]]: parseInt(matched![0]) }
    }).reduce((carry, turns) => ({ ...carry, ...turns }), {})
  })

  return [parseInt(gameId), gameArr]
}

export const extractMaximumGameData = (games: Record<string, number>[]): Record<string, number> => {
  return games.reduce((carry, game) => {
    return Object.keys(game).reduce((carry, key) => {
      return { ...carry, [key]: Math.max(carry[key] || 0, game[key]) }
    }, carry)
  }, {})
}
