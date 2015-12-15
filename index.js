var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var bodyParser  = require('body-parser');

var app = express();
var personSchema = {
  name: String,
  position: String,
  webpage: String
};

mongoose.connect('mongodb://localhost/simple');
var Person = mongoose.model('Person', personSchema, 'people');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/people', function (req, res) {
  console.log('Finding people with filter: ', req.query);
  Person.find({}, function (err, doc) {
    res.send(doc);
  });
});

app.get('/people/:id', function (req, res) {
  console.log('Finding person with ID: ', req.params.id);
  Person.findById(req.params.id, function (err, foundDocument) {
    res.send(foundDocument);
  });
});

app.post('/people', function (req, res) {
  console.log('Creating person: ', req.body);
  new Person(req.body).save(function (err, doc) {
    res.send(doc);
  });
});

app.delete('/people/:id', function(req, res){
  console.log('Deleting person with ID: ' + req.params.id);
  Person.remove({_id: req.params.id}, function (err, doc) {
    res.send(doc);
  });
});

app.listen(3000);