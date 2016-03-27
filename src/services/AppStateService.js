import { APP_NAME } from "../config";
import { State } from '../models/models';
function AppStateServiceFunction(){
  let _state = null;
  let AppStateService = {

    getState: function() {
      if (_state === null) {
        _state = new State();
      }
      return _state;
    }
  }
  return AppStateService;
}
angular.module(APP_NAME)
  .factory("AppStateService", AppStateServiceFunction);
