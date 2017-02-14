angular.module("aplicativo").config(function($routeProvider){
    
    //alert("teste");
    
    $routeProvider.when("/home", {
        
        templateUrl: "views/home.html",
        controller: "homeCtrl",
        resolve:{
            posts: function(aplicativoAPI){
                return aplicativoAPI.getPosts();
            },
            autores: function(aplicativoAPI){
                return aplicativoAPI.getAutor();
            },
            eventos: function(aplicativoAPI){
                return aplicativoAPI.getEventos();
            }
        }
        
    });
     $routeProvider.when("/cadastro",{
        
        templateUrl: "views/cadastro.html",
        controller: "cadastroCtrl"    
        
    });
    $routeProvider.when("/artigos",{
        
        templateUrl: "views/artigos.html",
        controller: "artigosCtrl",
        resolve:{
            
            postodos: function(aplicativoAPI, $route){
                    return aplicativoAPI.getTodosArtigos();
            }
        }
        
    });
    $routeProvider.when("/detalhesevento/:id", {
        
        templateUrl: "views/detalhesevento.html",
        controller: "eventoCtrl"    
        
    });
    $routeProvider.when("/detalhesautor/:id", {
        
        templateUrl: "views/detalhesautor.html",
        controller: "detalhesautorCtrl",
        resolve:{
            
            DetalheAutor: function(aplicativoAPI, $route){
                    return aplicativoAPI.getDetalheAutor($route.current.params.id);
            },
            PerfilAutor: function(aplicativoAPI, $route){
                    return aplicativoAPI.getPerfilAutor($route.current.params.id);
            }
        
        }
        
    });
     $routeProvider.when("/detalhes/:id", {
        
        templateUrl: "views/detalhes.html",
        controller: "detalhesCtrl",
        resolve:{
            
            postDetalhe: function(aplicativoAPI, $route){
                return aplicativoAPI.getDetalhePost($route.current.params.id);
            }
            
        } 
        
    });
    $routeProvider.otherwise({redirectTo: "/home"});
     
});