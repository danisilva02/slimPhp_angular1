angular.module("aplicativo").controller("homeCtrl", function ($scope, $http, posts, autores, eventos){
	
        $scope.posts = posts.data.postTeste;
        $scope.autorHome = autores.data.autor;
        $scope.eventos = eventos.data.evento;
        
        // var testeFire = function(){
                
        //         $http.get('api/index.php/testeFirebase').success(function(data){
                        
        //                 console.log(data);
        //         });
        // }
        // testeFire();
});