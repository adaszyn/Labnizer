import { APP_NAME } from '../config';
import {Group, State, Participant} from '../models/models';
export class ManageCtrl {
  constructor($scope, AppStateService) {
    console.log(AppStateService.getState());
    this.$scope = $scope;
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
    console.log($scope.groups);
  }
  showGroupDetails(group) {
    this.$scope.selectedGroup = group;
    console.log(group);
  }
  addParticipant(group) {
    let participant = new Participant(this.$scope.participantsLastName, this.$scope.participantsLastName);
    group.participants.push(participant);
    console.log(group);
  }
}
angular.module(APP_NAME)
  .controller("ManageCtrl", ManageCtrl);
