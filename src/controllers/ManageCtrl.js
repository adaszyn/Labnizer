import { APP_NAME } from '../config';
import {Group, State, Participant} from '../models/models';

let newParticipant = {
  firstName: '',
  lastName: ''
};
let newGroup = {
  name: ''
};
export class ManageCtrl {
  constructor($scope, AppStateService) {
    this.$scope = $scope;
    this.AppStateService = AppStateService;
    let group = new Group("Nazwa");
    let p1 = new Participant("Janusz1", "Jan1"),
        p2 = new Participant("Janusz2", "Jan2"),
        p3 = new Participant("Janusz3", "Jan3");
        group.participants.push(p1);
        group.participants.push(p2);
        group.participants.push(p3);
    AppStateService.getState().groups.push(group);
    $scope.groups = AppStateService.getState().groups;
    $scope.showGroupDetails = this.showGroupDetails.bind(this);
    $scope.selectedGroup = AppStateService.getState().groups[0];
    $scope.addParticipant = this.addParticipant.bind(this);
    $scope.addNewGroup = this.addNewGroup.bind(this);
    $scope.newParticipant = newParticipant;
    $scope.newGroup = newGroup;
  }
  showGroupDetails(group) {
    this.$scope.selectedGroup = group;
  }
  addParticipant(group) {
    let participant = new Participant(newParticipant.firstName, newParticipant.lastName);
    group.participants.push(participant);
    newParticipant.firstName = '';
    newParticipant.lastName = '';
  }
  addNewGroup() {
    if (newGroup.name.length < 1 || typeof newGroup.name !== "string") {
      return;
    }
    let group = new Group(newGroup.name);
    this.AppStateService.getState().groups.push(group);
    newGroup.name = '';
  }
}
angular.module(APP_NAME)
  .controller("ManageCtrl", ManageCtrl);
