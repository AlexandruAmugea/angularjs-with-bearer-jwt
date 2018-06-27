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

  addArticleController.$inject = ['articleService', '$state'];
  function addArticleController(articleService, $state) {
    let vm = this;
    vm.article = {
      title: '',
      description: '',
      text: ''
    };

    vm.addArticle = function(){
      articleService.addArticle(vm.article).then((res)=>{
        console.log('added home');
        console.log(res);
      }, (error)=> {
        console.log(error);
      })
    };
  }
}

export default AddArticleComponent;
