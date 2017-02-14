angular.module("aplicativo").controller("detalhesCtrl", function ($scope,$http, $routeParams, postDetalhe){
    
    
    document.body.scrollTop = 0;
    
    $scope.potsdetalhe = postDetalhe.data.produto[0];
    //console.log(postDetalhe.data.produto[0]);
    
    $scope.pagaPost = postDetalhe.data.produto.map(function(elemento){
      return elemento.idpost;
    });
    
    var arrayTeste = ["1","2","3","4","5","6","7","8"];

    var postAtual = arrayTeste.indexOf($routeParams.id);
    //console.log(postAtual);
    var postAtualAnt = postAtual - 1;
    //console.log(postAtualAnt);
    var postAtualProx = postAtual + 1;
    //console.log(postAtualProx);
    
    //console.log(postAtualAnt);
    //console.log(postAtualProx);

    $scope.anterior = arrayTeste[postAtualAnt]; 
    $scope.proximo = arrayTeste[postAtualProx]; 
    
    
    if($scope.anterior == undefined){
        
        postAtualAnt += 1;
        $scope.anterior = arrayTeste[postAtualAnt];
        
    }else if($scope.proximo == undefined){
        
        postAtualProx -= 1;
        $scope.proximo = arrayTeste[postAtualProx]; 
    }

        //console.log($scope.proximo);  
    
    $scope.proximoPost = function(id){
        
        $http.get("api/detalhesPost/"+id).success(function(data){
            
         $scope.potsdetalhe = data.produto[0];  
         console.log(data);    
            
            
        }).error(function(){
            
            
        });
    }
    
    
    $scope.anteriorPost = function(id){
        
        $http.get("api/detalhesPost/"+id).success(function(data){
            
         $scope.potsdetalhe = data.produto[0];  
         console.log(data);    
            
            
        }).error(function(){
            
            
        });
    }
  
    
});