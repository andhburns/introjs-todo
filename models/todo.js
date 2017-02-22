var mongoose = require('mongoose');
var validators = require('mongoose-validators');

var TodoSchema = new mongoose.Schema({
  name: {type: String, required: true},
  dueDate: Date,
  description: String,
  priority: {type: Number, min: 1, max: 5},
  completed: { type: Boolean, default: false, required: true}
});


module.exports = mongoose.model('Todo', TodoSchema);
