/**
 *
 * @param {Array} transactions
 * @param {String} category
 * @param {Date} start
 * @param {Date} end
 * @returns {number|*}
 */
export function getBalanceByCategoryInPeriod (transactions = [], category, start, end) {
  if (transactions.length > 0 && start < end) {
    return transactions.filter((item) => {
      return item.category === category
    }).reduce((accumulator, current) => {
      return accumulator + current.amount
    }, 0)
  } else {
    return 0
  }
}