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
      //console.log(this.children[i].value);
      if (member === this.children[i].value) {
        return this.children[i];
      }
    }
  }
  log() {
    let newArr = [];
    newArr.push(`-- ${this.value}`);
    for (let i = 0; i< this.children.length; i++){
      newArr.push(`---- ${this.children[i].value}`);
      for(let j = 0; j < this.children[i].children.length; j++){
        newArr.push(`------ ${this.children[i].children[j].value}`);
      }

    }
    console.log(newArr.join('\n'));
    return newArr.join('\n');
  }
}

module.exports = FamilyTree;
