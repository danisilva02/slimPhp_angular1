angular.module("aplicativo").controller("detalhesautorCtrl", function ($scope, $routeParams, DetalheAutor, PerfilAutor){
    
    //$scope.lalala = DetalheAutor.data;
    //$scope.potsdetalhe = postDetalhe.data.produto[0];
    //console.log($scope.lalala);
    $scope.postsAutor = DetalheAutor.data.produto;
    $scope.perfil = PerfilAutor.data.produto;
    console.log($scope.perfil);
    
    document.body.scrollTop = 0;
    
});