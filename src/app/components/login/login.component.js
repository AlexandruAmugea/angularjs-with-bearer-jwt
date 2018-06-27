function Login(){
  angular.module('app').component('ccLogin', loginComponent());

  function loginComponent(){
    return {
      bindings: {
        provider: '@'
      },
      template: require('./login.component.tmpl.html'),
      controllerAs: 'vm',
      controller: loginComponentController
    }
  }

  loginComponentController.$inject = ['loginService', '$state'];
  function loginComponentController(loginService, $state) {
    let vm = this;

    vm.user = {
      username: '',
      password: ''
    };

    vm.login = function(){
      loginService.login(vm.user).then(()=>{
        console.log('redirecting home');
        $state.go('home.home');
      }, (error)=> {
        console.log(error);
      })
    };
  }
}

export default Login;
