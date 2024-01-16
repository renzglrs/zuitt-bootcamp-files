// [Section] MongoDB Aggregation
/*
	- Used to generate manipulated data and perform operations to create filtered results that helps in analyzing data
	- Compared to doing CRUD operations on our data from previous sessions, aggregation gives us access to manipulate, filter and compute for results providing us with information to make necessary development decisions without having to create a frontend application.
*/

// Using the aggregate method
db.fruits.aggregate([
  /*
		$match - used to pass the documents that meet the specified conditions to the next pipeline stage/aggregation process.
		
		fruits: Mango, Apple, Kiwi, Banana

		onSale: true
			- Apple
			- Kiwi
			- Banana

		onSale: false
			- Mango

	*/
  { $match: { onSale: true } },
  /*
		$match: Apple, Kiwi, Banana

		$group - used to gropup element togeteher and field-value pairs using the data from the grouped elements

		_id: Apple - 1, Kiwi - 1, Banana - 2

		_id: 1

		total: $sum of all stock values
		total: Apple $stock + Kiwi $stock
		total: 20           + 25
		total: 45

		_id: 2

		total: $sum of all stock values
		total: Banana $stock
		total: 15

		$sum - used to get the summation of all the sticks per _id
   */
  { $group: { _id: "$supplier_id", total: { $sum: "$stock" } } },
]);

// Field projection with aggregation
/*
	- The "$project" can be used when aggregating data to include/exclude fields from the returned results
	- Syntax
		- { $project : { field: 1/0 } }
*/
db.fruits.aggregate([
  /*	
		fruits: Mango, Apple, Kiwi, Banana

		onSale: true
			- Apple
			- Kiwi
			- Banana

		onSale: false
			- Mango
	*/
  { $match: { onSale: true } },
  /*

   		_id: Apple - 1, Kiwi - 1, Banana - 2

   		_id: 1

   		total: $sum of all stock values
   		total: Apple $stock + Kiwi $stock
   		total: 20           + 25
   		total: 45

   		_id: 2

   		total: $sum of all stock values
   		total: Banana $stock
   		total: 15

   		{
			_id: 1,
			total: 45
   		}
   		{
			_id: 2,
			total: 15
   		}
    */
  { $group: { _id: "$supplier_id", total: { $sum: "$stock" } } },
  /*
		0 - exclusion
		1 - inclusion

		{
			total: 45
   		}
   		{
			total: 15
   		}
   */
  { $project: { _id: 0 } },
]);

// Sorting aggregated results
/*
	- The "$sort" can be used to change the order of aggregated results
	- Providing a value of -1 will sort the aggregated results in a reverse order
	- Syntax
		- { $sort { field: 1/-1 } }
*/
db.fruits.aggregate([
  { $match: { onSale: true } },
  /*
		{
			_id: 2,
			total: 15
   		}
   		{
			_id: 1,
			total: 45
   		}
   */
  { $group: { _id: "$supplier_id", total: { $sum: "$stock" } } },
  /*
		{
			_id: 1,
			total: 45
   		}
   		{
			_id: 2,
			total: 15
   		}
   */
  { $sort: { total: -1 } },
]);

// Aggregating results based on array fields
/*
	- The "$unwind" deconstructs an array field from a collection/field with an array value to output a result for each element.
	- The syntax below will return results creating separate documents for each of the countries provided per the "origin" field
	- Syntax
		- { $unwind: field }
*/
db.fruits.aggregate([{ $unwind: "$origin" }]);

db.fruits.aggregate([
  { $unwind: "$origin" },
  { $group: { _id: "$origin", kinds: { $sum: 1 } } },
]);
