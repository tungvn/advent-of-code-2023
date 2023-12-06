
export const getFirstNumber = (str: string) => {
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(+str[i])) {
      return parseInt(str[i])
    }
  }
}

export const getLastNumber = (str: string) => {
  for (let i = str.length - 1; i >= 0; i--) {
    if (!isNaN(+str[i])) {
      return parseInt(str[i])
    }
  }
}
