class FamilyTree {
  constructor(value) {
    if (value === undefined || typeof value !== "string") {
      throw "Please enter a name!";
    } else {
      this.value = value;
    }
    this.children = [];
  }
  insert(children) {
    this.children.push(new FamilyTree(this.value));
  }
  familySize() {}
  findMember() {}
  log() {}
}

module.exports = FamilyTree;
