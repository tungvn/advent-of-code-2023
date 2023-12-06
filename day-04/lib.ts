export const findWinningNumbers = ([winningNumbers, myNumbers]: [string, string]): string[] => {
  const regexp = new RegExp(`\\b${winningNumbers.split(/\D+/g).join('\\b|\\b')}\\b`, 'g')

  return Array.from(myNumbers.matchAll(regexp)).map(match => match[0])
}
