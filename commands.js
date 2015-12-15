var mongoimport;
mongoimport --db simple --collection people --jsonArray people.json

// Connect to mongo.
mongo

// Show DBs
show dbs

// Connect to db.
use simple

// Check currently selected db
db

// Show all collections
show collections

// Get count.
db.people.count()

// Query all
db.people.find()

// Query all (formatted)
db.people.find().pretty()

// Find one.
db.people.findOne()

// Query.
db.people.find({Class: 'ISEM'}).sort({name: 1}).pretty() // -1 for desc.

// Query with and operator.
db.people.find({
  Class: 'student',
  $and: [{"name": /.*And.*/}]
}).pretty() // -1 for desc.

// Insert.
db.people.insert({
  "name": "Hetika Patel",
  "Class": "ISEM",
  "webpage": "http://harrisburg.edu"
})

// Update.
db.people.update(                  // collection
  {Class: 'student'},           // update criteria
  {$set: {position: 'hu-student'}},// update action
  {multi: true})                   // update option

// See last insert.
db.people.find().sort({_id: -1}).limit(1)

// Remove all.
db.people.remove({})

// Get count.
db.people.count()

// Exit mongo shell.
quit()

// Drop database.
db.dropDatabase()

// Show DBs
show dbs

// Insert data again.
mongoimport --db simple --collection people --jsonArray people.json

// Connect to mongo.
mongo

// Show DBs
show dbs

// Connect to db.
use simple


//load("scripts/myjstest.js")

// Exit.
//quit()


// Sort.
db.restaurants.find().sort({"borough": 1, "address.zipcode": 1})