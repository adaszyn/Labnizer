class Participant {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  toJSON() {
    return {
      firstName: this.firstName,
      lastName: this.lastName
    }
  }
  static fromJSON(object) {
    let participant = new Participant(object.firstName, object.lastName);
    return participant;
  }
}
export default Participant;
