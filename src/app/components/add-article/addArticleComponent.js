function AddArticleComponent(){
  angular.module('app').component('articleForm', addArticleComponent());

  function addArticleComponent(){
    return {
      bindings: {
        provider: '@'
      },
      template: require('./addArticle.tmpl.html'),
      controllerAs: 'vm',
      controller: addArticleController
    }
  }

  addArticleController.$inject = ['articleService', '$state', '$mdDialog'];
  function addArticleController(articleService, $state, $mdDialog) {
    let vm = this;
    vm.article = {
      title: '',
      description: '',
      text: ''
    };

    vm.showAlert = function() {
      $mdDialog.show(
        $mdDialog.alert()
          .parent(angular.element(document.querySelector('#popupContainer')))
          .clickOutsideToClose(true)
          .title('Article added')
          .textContent('Article was added redirecting to article page')
          .ok('Ok')
      ).then($state.go('home.home'));
    };

    vm.addArticle = function(){
      articleService.addArticle(vm.article).then(()=>{
        vm.showAlert();
      }, (error)=> {
        console.log(error);
      })
    };
  }
}

export default AddArticleComponent;
