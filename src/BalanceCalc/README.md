
This function is responsible for calculating user's balance in a specific **Category** in a finite period of time.
### Input
It receives 4 arguments: *transactions*, *category*, *start*, *end*;

***transactions*** is an array of objects, each object represent a transaction, structured as follows:

```json
{
	id:  1,
	sourceAccount:  'my_account',
	targetAccount:  'coffee_shop',
	amount:  -30,
	category:  'groceries',
	time:  '2018-03-12T12:34:00Z'
}
```
***category*** is a string to specify on which category the function should do the process, e.g. : `'groceries'`

***start*** timestamp string, start point of the time period. e.g.:  `'2018-03-12T12:34:00Z'`
***end*** timestamp string, end point of the time period. e.g.:  `'2018-07-12T12:34:00Z'`


### Output
A number, which is the total amount of transactions of a specific category in a specific time period.
