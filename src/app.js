import { APP_NAME } from './config';

(() => {
  angular.module(APP_NAME, ['ui.router', 'ui.bootstrap', 'ui.grid']);
  angular.element(document).ready(() => {
    angular.bootstrap(document, [APP_NAME]);
  });
})();
