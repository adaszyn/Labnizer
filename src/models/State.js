import Group from './Group';

class State {
  constructor() {
    this.groups = [];
  }
  toJSON() {
    return {
      groups: this.groups.map((group) => group.toJSON())
    }
  }
  static fromJSON(object) {
    let groups = object.groups.map((group) => Group.fromJSON(group));
    let state = new State();
    state.groups = groups;
    return state;
  }
  addGroup(group) {
    this.groups.push(group);
  }
}
export default State;
