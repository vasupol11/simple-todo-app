angular.module('todoApp', ['ui.router'])
  .controller('TodoListController', function () {
    var todoList = this
    todoList.textarea = 'hello'
    todoList.addTodo = function () {
      //console.log(todoList.textarea)
      console.log(todoList.textarea.split("\n"))
    }
  })
