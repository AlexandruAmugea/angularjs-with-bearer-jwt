import Constants from '../constants';

function AuthorizationService(){
  angular.module('app').service('authService', authService);
  authService.$inject = ['$q', '$http', '$state'];
  function authService($q, $http, $state){
    const JWT = 'jwt';

    return {
      storeJWT: storeJWT,
      getJWT: getJWT,
      isAuthorized: isAuthorized,
    };

    function storeJWT(token) {
      let bearerToken = `Bearer ${token.replace('JWT ', '')}`;
      sessionStorage.setItem(JWT, bearerToken);
    }

    function getJWT() {
      return sessionStorage.getItem(JWT);
    }

    function isAuthorized(){
      let deferred = $q.defer();
      $http.get(Constants.verifyUserToken).then(()=>{
          deferred.resolve();
      }, ()=>{
          $state.go('login');
          deferred.reject();
      });
      return deferred.promise;
    }
  }
}

export default AuthorizationService;
