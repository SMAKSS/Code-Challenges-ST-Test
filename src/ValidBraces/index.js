const map = { '(': ')', '[': ']', '{': '}' }

export class ValidityCheck {
  /**
   *
   * @param {String} braces
   * @returns {boolean}
   */
  static validBraces ([...braces]) {
    if (braces.length === 0) {
      return false
    } else {
      const stack = []
      const bracesLength = braces.length

      for (let i = 0; i < bracesLength; i++) {
        if (braces[i] === '(' || braces[i] === '{' || braces[i] === '[') {
          stack.push(braces[i])
        } else {
          if (braces[i] !== map[stack.pop()])
            return false
        }
      }

      return stack.length === 0
    }
  }
}