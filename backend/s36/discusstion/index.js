// Using Aggregate method
db.fruits.aggregate([
  /* 
        $match - used to pass the documents that meet the specified conditions to the next pipeline stage/ aggregation process.

        Mango, Apple, Kiwi, Banana

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

        $group - used to group eleent together and field-value pairs using the data from the grouped elements

        _id: Apple - 1, Kiwi - 1, Banana -2

        _id: 1
        total: $sum of all stock values
        total: Apple $stock + Kiwi $stock
        total: 20           + 25
        total: 45

        _id: 2
        total: $sum of all stock values
        total: Banana $stock
        total: 15

        $sum - used to get the summation of all the stocks per _id
    */
  { $group: { _id: "$supplier_id", total: { $sum: "$stock" } } },
]);

// Field projection with Aggregate

db.fruits.aggregate([
  /* 
        $match - used to pass the documents that meet the specified conditions to the next pipeline stage/ aggregation process.

        Mango, Apple, Kiwi, Banana

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

        $group - used to group eleent together and field-value pairs using the data from the grouped elements

        _id: Apple - 1, Kiwi - 1, Banana -2

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

// Sorting aggreagated results

db.fruits.aggregate([
  { $match: { onSale: true } },
  {
    $group: {
      _id: "$supplier_id",
      total: { $sum: "$stock" },
    },
  },
  { $sort: { total: -1 } },
]);

db.fruits.aggregate([{ $unwind: "$origin" }]);

db.fruits.aggregate([
  { $unwind: "$origin" },
  { $group: { _id: "$origin", kinds: { $sum: 1 } } },
]);
