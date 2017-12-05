//find potions that cost less than 20$

db.potions.find({"price": {"$lt": 10}})
// > 10 and < 20
db.potions.find({"price": {"$gt": 10, "$lt":20}})


// you could also use $ne

// Element match arrays

db.potions.find(
  {"sizes" : {"$elemMatch": {"$gt": 8, "$lt": 16}}}
)

// Whenever you deal with arrays, you should use array query operator


//Projections

db.potions.find( {"score" : {"$gte":80}},
{"vendor": true , "name": true})
