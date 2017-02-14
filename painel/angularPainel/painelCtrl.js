angular.module("appPainel").controller("painelCtrl", function ($scope, $http, $location) {
    
    //console.log($routeParams.user);
    //alert("teste");
    //console.log($location.search().id);
    
    var usuario = $location.search().id;
    $scope.dadosusuario;
    $scope.identificacao;
    $scope.postPainel;
    
    
    //$scope.testePainel = "bem vindo"+dadosusuario.autornome; 

    var postUsuario = function(){
        
        $http.get('../api/perfilusuario/'+usuario).success(function(data){
            
            //console.log(data.produto);
            $scope.dadosusuario = data.produto;
            $scope.identificacao = data.produto.idautor;
            console.log($scope.identificacao);
            postUsuarioPainel($scope.identificacao);
            
        });
    }
    
    var postUsuarioPainel = function(identificacao){
        
        $http.get('../api/postusuarioPainel/'+identificacao).success(function(data){
            
            console.log(data);
            $scope.postPainel = data.produto;
            //console.log($scope.postPainel);
            
        });
    }
    
    
    postUsuario();
    
    
    
});

angular.module("appPainel").config(function($locationProvider){
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

});