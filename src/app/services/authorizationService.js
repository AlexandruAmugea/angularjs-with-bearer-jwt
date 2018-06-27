import Constants from '../constants';

function AuthorizationService(){
  angular.module('app').service('authService', authService);
  authService.$inject = ['$q', '$http'];
  function authService($q, $http){
    const JWT = 'jwt';

    return {
      storeJWT: storeJWT,
      getJWT: getJWT
    };

    function storeJWT(token) {
      let bearerToken = `Bearer ${token.replace('JWT ', '')}`;
      sessionStorage.setItem(JWT, bearerToken);
    }

    function getJWT() {
      return sessionStorage.getItem(JWT);
    }
  }
}

export default AuthorizationService;
