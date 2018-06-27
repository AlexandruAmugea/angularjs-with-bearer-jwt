import Constants from '../constants';

function LoginService(){
  angular.module('app').service('loginService', loginService);
  loginService.$inject = ['$q', '$http', '$state', 'authService'];
  function loginService($q, $http, $state, authService){
    return {
      login: login,
      authorize: authorize
    };
    function login(user){
      let deferred = $q.defer();
      $http.post(Constants.signin, user).then((res)=>{
        authService.storeJWT(res.data.token);
        deferred.resolve(res.data);
      },(error)=>{
        deferred.reject(error);
      });
      return deferred.promise;
    }

    function authorize(){
      let deferred = $q.defer();
      deferred.resolve(true);
      $state.go('login');
      return deferred.promise;
    }
  }
}

export default LoginService;
