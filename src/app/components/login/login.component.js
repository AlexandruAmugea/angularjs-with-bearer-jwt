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

  loginComponentController.$inject = ['loginService', '$state', '$mdDialog'];
  function loginComponentController(loginService, $state, $mdDialog) {
    let vm = this;

    vm.user = {
      username: '',
      password: ''
    };

    vm.showAlert = function() {
      $mdDialog.show(
        $mdDialog.alert()
          .parent(angular.element(document.querySelector('#popupContainer')))
          .clickOutsideToClose(true)
          .title('Error')
          .textContent('Wrong username or password')
          .ok('Ok')
      );
    };

    vm.login = function(){
      loginService.login(vm.user).then(()=>{
        $state.go('home.home');
      }, (error)=> {
        vm.showAlert();
      })
    };
  }
}

export default Login;
