    (function(){
      var app = angular.module('Todo-app', []);
        app.controller('TodoCtrl', function($scope){
            $scope.todos= [];

            $scope.todoPriority= 'normal';

            $scope.addTodo= function(){
              var newTodo={
                done: false,
                text: $scope.todoText,
                priority: $scope.todoPriority
              };
                $scope.todos.push(newTodo);
                $scope.todoText = '';
                $scope.todoPriority = 'normal';
            };

        $scope.getTotal= function(){
          return $scope.todos.length;
        };

       $scope.removeTodo= function(start){

          $scope.todos.splice(start, 1);
        };

        $scope.move= function(index, direction){
          if (direction === 'up'){
            if (index === 0){
              return;
              }
              index = index -1;
            }
          if (direction === 'down'){
             if (index === $scope.todos.length -1) {
             return;
             }
          }
        var todo= $scope.todos[index];
        $scope.todos.splice(index+2,0, todo);
        $scope.todos.splice(index, 1);
        };
     });

    });
