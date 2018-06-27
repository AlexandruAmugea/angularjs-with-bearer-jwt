"use strict";

function AuthInterceptor(){
  angular.module('app').factory('authInterceptor', authInterceptor);
  authInterceptor.$inject = ['$injector', '$q'];
  function authInterceptor ($injector, $q){
    return {
      'request': function(config) {
        let authorizationService = $injector.get('authService');
        let JWT = authorizationService.getJWT();
        if(JWT) {
          config.headers.Authorization = JWT;
        }
        return config || $q.when(config);
      },
    };
  }
}

export default AuthInterceptor;
