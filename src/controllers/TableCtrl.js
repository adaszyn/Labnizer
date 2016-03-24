import { APP_NAME } from '../config';

export class TableCtrl {
  constructor($scope) {
    console.log($scope);
    this.table = 'asas';
    $scope.myData = [
   {
       "firstName": "Cox",
       "lastName": "Carney",
       "company": "Enormo",
       "employed": true
   },
   {
       "firstName": "Lorraine",
       "lastName": "Wise",
       "company": "Comveyer",
       "employed": false
   },
   {
       "firstName": "Nancy",
       "lastName": "Waters",
       "company": "Fuelton",
       "employed": false
   }
];
  }
}

angular.module(APP_NAME)
  .controller('TableCtrl', TableCtrl);
