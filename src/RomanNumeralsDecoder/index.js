const map = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000, '': -1 }

/**
 *
 * @param {String} roman
 * @returns {number|*}
 */
export function romanNumDecoder ([...roman]) {
  if (roman.length === 0) {
    return -1
  } else {
    return roman.reduce((accumulator, current, index, array) => {
      const currentIndex = map[current]
      const previousIndex = map[array[index - 1]] || 0

      if (currentIndex <= previousIndex) {
        return accumulator + currentIndex
      } else {
        return accumulator - previousIndex * 2 + currentIndex
      }
    }, 0)
  }
}