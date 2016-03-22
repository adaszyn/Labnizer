import { APP_NAME } from "./config";
import { MainCtrl } from "./controllers/MainCtrl"
(() => {
  console.log("app name route: ", APP_NAME);
  angular.module(APP_NAME)
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/main");
    $stateProvider
      .state('main', {
        url: "/main",
        templateUrl: "/static/partials/main.html",
        controller: MainCtrl
      })
  });
})();
