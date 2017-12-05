//./mongo localhost:27017/reviews  /Users/vi390699/Documents/learning/sample_mongodb_queries/insert_and_find.js

db.potions.drop();

db.potions.insert( {
    "name" : "Love",
    "vendor": "KC",
    "price": 10.99,
    "score": 84,
    "tryDate": new Date(2012,8,13),
    "ingredients": ["new toes", "secret" ,"laughter"],
    "ratings" : { "strength": 2 , "flavor" : 4}

});


db.potions.insert( {
    "name" : "Romance",
    "vendor": "KC",
    "price": 4.99,
    "score": 70,
    "tryDate": new Date(2012,8,13),
    "ingredients": ["new toes" ,"laughter","secret"],
    "ratings" : { "strength": 3 , "flavor" : 5}

});


db.potions.insert( {
    "name" : "Shrinking",
    "vendor": "Buildit",
    "price": 13.88,
    "score": 94,
    "tryDate": new Date(2012,8,13),
    "ingredients": ["secret","new toes" ,"laughter"],
    "ratings" : { "strength": 1 , "flavor" : 3}

});

db.potions.find( { name : "Love" , "ratings.flavor" : 5})

// db.potions.drop();
