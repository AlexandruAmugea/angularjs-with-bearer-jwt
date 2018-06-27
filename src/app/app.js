import angular from 'angular';
import ngAria from 'angular-aria';
import ngAnimate from 'angular-animate';
import ngMessages from 'angular-messages';
import ngMaterial from 'angular-material';
import uiRouter from 'angular-ui-router';
//TODO: import into scss files directly to have access to the scss theme( this is demo purpose)
import '../../node_modules/angular-material/angular-material.min.css';
import '../style/app.css';

//TODO: move constants to a different service
const APP_NAME = 'app';

let app = angular.module(APP_NAME, [ngAria, ngAnimate, ngMessages, ngMaterial, uiRouter]);

/*
* Import components/services/directives/controllers
* */
import AuthService from './services/authorizationService';
import LoginService from './services/loginService';
import ArticleService from './services/articleService';
import AuthInterceptor from './services/authInterceptor';
import LoginComponent from './components/login/login.component';
import ArticleComponent from './components/article-placeholder/articleComponent'
import AddArticleComponent from './components/add-article/addArticleComponent';
import NavController from './controllers/navController';

AuthService();
LoginService();
ArticleService();
AuthInterceptor();
AddArticleComponent();
ArticleComponent();
LoginComponent();
NavController();

/*
* Routing config and application
* */
// TODO: move into app routing config
app.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', ($stateProvider, $urlRouterProvider, $httpProvider)=>{

  $httpProvider.interceptors.push('authInterceptor');
  $urlRouterProvider.otherwise('/login');

  $stateProvider
    .state('home', {
      url: '/home',
      views: {
        dashboard: {
          template: require('./views/home.tmpl.html')
        },
      },
      resolve: {
        authorize: ['authService', (authService) => {
          return authService.isAuthorized();
        }]
      }
    })

    .state('home.home', {
      url: '/dashboard',
      views: {
        users: {
          template: require('./views/users.tmpl.html')
        }
      },
      resolve: {
        authorize: ['authService', (authService) => {
          return authService.isAuthorized();
        }]
      }
    })

    .state('home.articles', {
      url: '/articles',
      views: {
        index: {
          template: require('./views/articles.tmpl.html')
        }
      },
      resolve: {
        authorize: ['authService', (authService) => {
          authService.isAuthorized().then(()=>{
            return authService.isAuthorized();
          })
        }]
      }
    })
    .state('login', {
      url: '/login',
      views: {
        login: {
          template: require('./views/login.tmpl.html')
        }
      }
    })

    .state('404', {
      url: '/404',
      views: {
        login: {
          template: require('./views/404.tmpl.html')
        }
      }
    })
}]);

app.run(['$rootScope', 'loginService', '$state', function($rootScope, loginService, $state) {

}]);

export default APP_NAME;
