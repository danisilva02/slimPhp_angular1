angular.module("aplicativo").controller("eventoCtrl", function ($scope, $routeParams){
    
    
    //$scope.potsdetalhe = postDetalhe.data.produto[0];
    //console.log(postDetalhe.data.produto[0]);
    
    document.body.scrollTop = 0;
    
    $scope.mes =  [ 
        
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
		"Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro" 
    ];
    
    $scope.diaNumero = [
        
        "1","2","3","4","5","6","7","8","9","10"
    ];
    
    $scope.dia = [
        
        "Domingo","Segunda","terça","Quarta","Quinta","Sexta","Sabado"
    ];
    
    //$scope.mes = "mes";
    
});