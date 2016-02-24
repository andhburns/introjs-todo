var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todos2');
var Todo = require('./models/todo');
var todoRoutes = require('./routes/todos');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/', function(req, res){
  res.json({message: 'it is working!'})
})

app.use('/api', todoRoutes);

var port = process.env.PORT || 3000;

app.listen(port, function(req, res){
  console.log('listening on port: ' + port)
});