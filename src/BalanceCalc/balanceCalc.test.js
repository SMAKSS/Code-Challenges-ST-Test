import { getBalanceByCategoryInPeriod } from './'
import chai from 'chai'

var assert = chai.assert

const transactions = [
  {
    id: 1,
    sourceAccount: 'my_account',
    targetAccount: 'coffee_shop',
    amount: -30,
    category: 'groceries',
    time: '2018-03-12T12:34:00Z'
  },
  {
    id: 2,
    sourceAccount: 'employer',
    targetAccount: 'my_account',
    amount: 100,
    category: 'income',
    time: '2018-03-13T12:34:00Z'
  },
  {
    id: 3,
    sourceAccount: 'my_account',
    targetAccount: 'coffee_shop',
    amount: -50,
    category: 'groceries',
    time: '2018-03-14T12:34:00Z'
  },
  {
    id: 4,
    sourceAccount: 'my_account',
    targetAccount: 'market',
    amount: -60,
    category: 'groceries',
    time: '2018-04-01T12:34:00Z'
  },
  {
    id: 5,
    sourceAccount: 'stock_market',
    targetAccount: 'my_account',
    amount: -60,
    category: 'stock',
    time: '2018-03-01T12:34:00Z'
  },
  {
    id: 6,
    sourceAccount: 'stock_market',
    targetAccount: 'my_account',
    amount: 100,
    category: 'stock',
    time: '2018-03-05T12:34:00Z'
  }
]

describe('getBalanceByCategoryInPeriod()', function () {
  it('returns 0 if there are no transactions', function () {
    assert.equal(
      getBalanceByCategoryInPeriod(
        [],
        'groceries',
        new Date('2018-03-01'),
        new Date('2018-03-31')
      ),
      0
    )
  })
  it('returns 0 if start bigger than or equal to end', function () {
    assert.equal(
      getBalanceByCategoryInPeriod(
        [],
        'groceries',
        new Date('2018-03-02'),
        new Date('2018-03-01')
      ),
      0
    )
  })
  /* The original test result for the following test case was -80,
    but since we got 3 transaction with groceries category
    the actual total number of transaction would be -140 */
  it('returns -140', function () {
    assert.equal(
      getBalanceByCategoryInPeriod(
        transactions,
        'groceries',
        new Date('2018-03-01'),
        new Date('2018-03-31')
      ),
      -140
    )
  })
  it('returns 0 on non-matching category', function () {
    assert.equal(
      getBalanceByCategoryInPeriod(
        transactions,
        'market',
        new Date('2018-03-01'),
        new Date('2018-03-31')
      ),
      0
    )
  })
  it('returns 40 on bi-directional category', function () {
    assert.equal(
      getBalanceByCategoryInPeriod(
        transactions,
        'stock',
        new Date('2018-03-01'),
        new Date('2018-03-31')
      ),
      40
    )
  })
})