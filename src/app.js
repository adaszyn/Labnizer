import { APP_NAME } from "./config";

(() => {
  console.log("app name: ", APP_NAME);
  angular.module(APP_NAME, ['ui.router', 'ui.bootstrap']);
  angular.element(document).ready(function() {
    angular.bootstrap(document, [APP_NAME]);
  });
})()
