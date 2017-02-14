angular.module("aplicativo").controller("artigosCtrl", function ($scope, postodos){
    
    
    $scope.todosposts = postodos.data.postTodos;
    //sconsole.log(postodos);
    document.body.scrollTop = 0;
    
});