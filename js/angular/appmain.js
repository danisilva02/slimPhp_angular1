angular.module("aplicativo").controller("cadastroCtrl", function ($scope, $http, config){
	
		$scope.tituloCadastrar = "Cadastrar";
        $scope.formularioCadastrar = false;
        $scope.formularioCadastro = false;
    
        $scope.login = {
            
            usuario: "",
            senha: ""
        }
    

        $scope.fazerlogin = function(){
            
            
            $http.post('api/login', $scope.login)
            
                 .success(function(data){
                
                  console.log(data);    
                    
                  if(data.logado){
                      
                      window.location = "painel/index.php?id="+$scope.login.usuario
                      
                  }else{
                      
                      alert('usuario ou senha incorreto');
                  }
                
                
                 });
            
            
        }
        
        $scope.AtivaForm = function(valor){
            
            
            
            if(valor == 1){
                
                $scope.formularioCadastrar = false;
                $scope.formularioCadastro = true;
                
            }else if(valor == 2){
                
                $scope.formularioCadastrar = true;
                $scope.formularioCadastro = false;
            }
            
        };

});