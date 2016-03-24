import { APP_NAME } from './config';
import { MainCtrl } from './controllers/MainCtrl';
import { TableCtrl } from './controllers/TableCtrl';
(() => {
  angular.module(APP_NAME)
  .config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/main');
    $stateProvider
      .state('main', {
        url: '/main',
        templateUrl: 'static/partials/main.html',
        controller: MainCtrl,
      })
      .state('table', {
        url: '/table',
        templateUrl: 'static/partials/table.html',
        controller: TableCtrl,
      })
      .state('help', {
        url: '/help',
        templateUrl: 'static/partials/help.html',
        controller: TableCtrl,
      });
  });
})();
