import Participant from './Participant';

class Group {
  constructor(name) {
    this.name = name;
    this.participants = [];
  }
  addParticipant(participant) {
    this.participants.push(participant);
  }
  toJSON() {
    return {
      name: this.name,
      participants: this.participants.map((participant) => participant.toJSON())
    }
  }
  static fromJSON(object) {
    let group = new Group(object.name);
    group.participants = object.participants.map((participant) => Participant.fromJSON(participant))
    return group;
  }
}
export default Group;
