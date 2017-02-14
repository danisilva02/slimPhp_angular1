angular.module("aplicativo").factory("aplicativoAPI", function($http, config){
    
    var _getPosts = function(){
        
        return $http.get("api/index.php/listaProdutosHome");
    };
    
    var _getAutor = function(){
        
        return $http.get("api/index.php/listaAutorHome"); 
    };
    
    var _getEventos = function(){
        
        return $http.get("api/index.php/listaEventoHome"); 
    };
    
    var _getTodosArtigos = function(){
        
        return $http.get("api/index.php/listaTodosArtigos"); 
    };
    
    var _getDetalhePost = function(id){
        
        return $http.get("api/index.php/detalhesPost/"+id); 
    };
    
    var _getDetalheAutor = function(id){
        
        return $http.get("api/index.php/detalhesAutor/"+id); 
    };
    
    var _getPerfilAutor = function(id){
        
        return $http.get("api/index.php/perfilAutor/"+id); 
    };
    
   
    
    return{
        
        getPosts: _getPosts,
        getAutor: _getAutor,
        getEventos: _getEventos,
        getDetalhePost:_getDetalhePost,
        getDetalheAutor:_getDetalheAutor,
        getPerfilAutor:_getPerfilAutor,
        getTodosArtigos:_getTodosArtigos
        
    };
    
});