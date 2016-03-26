import { APP_NAME } from "../config";
function FileServiceFunction(){
  let FileService = {
    processFile: (file) => {
      // TODO implement this method
      console.log(file);
    },
    serializeState(state) {

    }
  }
  return FileService;
}
console.log('Constructing service', APP_NAME)
angular.module(APP_NAME)
  .factory("FileService", FileServiceFunction);
