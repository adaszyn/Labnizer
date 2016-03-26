import { APP_NAME } from '../config';
import {Group, State, Participant} from '../models/models';
export class MainCtrl {
  constructor($scope, FileService) {
    let fileInputElement = document.getElementById('file-input');
    fileInputElement.addEventListener('change', this.loadFile.bind(this));
    this.FileService = FileService;

    // TESTING
    let group = new Group("Subject", "Name");
    let participant = new Participant("Jan", "Kowalski");
    let state = new State();
    state.addGroup(group);
    group.addParticipant(participant);
    let s = JSON.stringify(state.toJSON());
    console.log(state)
    let newState = State.fromJSON(JSON.parse(s));
    console.log(newState)

  }
  loadFile(event) {
    if (event.target.files && event.target.files.length !== 0) {
        this.FileService.processFile(event.target.files[0]);
    }

  }

}

angular.module(APP_NAME)
  .controller("MainCtrl", MainCtrl);
