import Constants from '../constants';

function ArticleService(){
  angular.module('app').service('articleService', articleService);
  articleService.$inject = ['$q', '$http'];
  function articleService($q, $http){
    return {
      getArticles: getArticles,
      addArticle: addArticle,
      removeArticle: removeArticle
    };

    function addArticle(article) {
      let deferred = $q.defer();
      $http.post(Constants.newArticle, article).then((res)=>{
        deferred.resolve(res.data);
      }, (error)=>{
        deferred.reject(error);
      });
      return deferred.promise;
    }

    function getArticles() {
      let deferred = $q.defer();
      $http.get(Constants.getArticles).then((res)=>{
        deferred.resolve(res.data);
      }, (error)=>{
        deferred.reject(error);
      });
      return deferred.promise;
    }

    function removeArticle(article) {
      let deferred = $q.defer();
      $http.post(Constants.removeArticle, {'id': article._id}).then((res)=>{
        deferred.resolve(res.data);
      }, (error)=>{
        deferred.reject(error);
      });
      return deferred.promise;
    }
  }
}

export default ArticleService;
