use reviews

db.potions.update( 
    {"name" : "Love"},
    {"$set" : {"price" : 3.99}}
)


db.potions.update(
    {"vendor" : "KC"},
    {"$set" : {"vendor" :"KettleCook"}},
    {"multi": true}
)

db.potions.update(
    {"vendor" : "Buildit"},
    {"$inc" : {"count" : 5}}
)

// Upsert - create if it didn't exist
db.logs.update(
    {"potion": "true"},
    {"$inc": {"count" : 1}},
    {"upsert" : true}
)

// Remove an attribute from all documents
db.potions.update ( 
    {},
    {"$unset" : {"score":""}},
    {"multi": true}
)

//Rename an attribute
db.potions.update ( 
    {},
    {"$rename" : {"price":"cost"}},
    {"multi": true}
)

db.potions.update (
    {"ingredients": "secret"},
    {"$set": {"ingredients.$" : 42}},
    {"multi": true}
)

//Working Arrays

// The $pop operator will remove first and last value of array -1 (first element) or 1

db.potions.update ( 
    {"name": "Romance"},
    {"$pop" : {"ingredients": -1}}
)

//$push adds element to end of array
//$addToSet - addIfAbsent kind of operation - keeps array unique
//$pull - remove element from any location