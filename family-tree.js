class FamilyTree {
  constructor(value) {
    if (value === undefined || typeof value !== 'string') {
      throw 'Please enter a name!';
    } else {
      this.value = value;
    }
    this.children = [];
  }
  insert(child) {
    this.children.push(new FamilyTree(child));
  }
  familySize() {
    return this.children.length + 1;
  }
  findMember(member) {
    for (let i = 0; i < this.children.length; i++) {
      console.log(this.children[i].value);
      if (member === this.children[i].value) {
        return this.children[i];
      }
    }
  }
  log() {}
}

module.exports = FamilyTree;
