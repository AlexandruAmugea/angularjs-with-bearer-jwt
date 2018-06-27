function ArticlePreviewComponent(){
  angular.module('app').component('articlePreview', articlePreviewComponent());

  function articlePreviewComponent(){
    return {
      bindings: {
        provider: '@'
      },
      template: require('./article.tmpl.html'),
      controllerAs: 'vm',
      controller: articlePreviewController
    }
  }

  articlePreviewController.$inject = ['articleService', '$state'];
  function articlePreviewController(articleService, $state) {
    let vm = this;
    vm.articles = [];
      articleService.getArticles().then((res)=>{
        vm.articles = res;
      }, (error)=> {
        console.log(error);
      });

    vm.removeArticle = function(article){
      articleService.removeArticle(article).then(()=>{
        articleService.getArticles().then((res)=>{
          vm.articles = res;
        });
      }, (error)=> {
        console.log(error);
      })
    }

    }
}

export default ArticlePreviewComponent;
