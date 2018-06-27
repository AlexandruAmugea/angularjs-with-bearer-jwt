function NavController(){
  angular.module('app').controller('navController', navController);
  navController.$inject = ['$q', '$http', '$state'];
  function navController($q, $http, $state){
    let vm = this;
    vm.goto = (state) => {
      $state.go(state);
    };
  }
}

export default NavController;
