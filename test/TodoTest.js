var assert = require('chai').assert;
var Todo = require('../models/todo');
var expect = require('chai').expect;

describe("Todo", function() {
  it("can create a Todo", function() {
    //Arrange
    var todoTest = new Todo();
    //Act
    //Assert
    //assert.equal(actual, expected);
    assert.isOk(todoTest);
  });
  it("can take a number", function() {
    //Arrange
    var todoTest = new Todo();
    todoTest.priority = 4;
    //Act
    //Assert
    //assert.equal(actual, expected);
    assert.isOk(todoTest.priority);
  });
  it("can't take a string", function() {
    //Arrange
    var todoTest = new Todo();
    todoTest.priority = "Ricky";
    //Act
    //Assert
    //assert.equal(actual, expected);
    assert.equal(todoTest.priority, undefined);
  });
  it("can't take a number larger than 5", function() {
    //Arrange
    var todoTest = new Todo();
    todoTest.priority = 6;
    //Act
    todoTest.validate();
    //Assert
    //assert.equal(actual, expected);
    assert.equal(todoTest.priority, 6);
  });
  it("is a number", function(done) {
    //Arrange
    var todoTest = new Todo();
    todoTest.name = "Andy";
    todoTest.priority = "Ricky";
    //Act
    //Assert
    //assert.equal(actual, expected);
    todoTest.validate(function(err){
      expect(err.errors.priority).to.exist;
      done();
    });
  });
  it("has errror without a name", function(done) {
    //Arrange
    var aTodo = new Todo();
    aTodo.validate(function(err){
      expect(err.errors.name).to.exist;
      done();
    });
  });
  it("is a number", function(done) {
    //Arrange
    var todoTest = new Todo();
    todoTest.name = "Andy";
    todoTest.priority = 6;
    //Act
    //Assert
    //assert.equal(actual, expected);
    todoTest.validate(function(err){
      expect(err.errors.priority).to.exist;
      done();
    });
  });
  it("can take a Boolean", function(done) {
    //Arrange
    var todoTest = new Todo();
    todoTest.name = "Andy";
    todoTest.completed = "";
    console.log(todoTest.completed);
    //Act
    //Assert
    //assert.equal(actual, expected);
    todoTest.validate(function(err){
      console.log(err.errors);
      expect(err.errors.completed).to.exist;
      done();
    });
  });
});
