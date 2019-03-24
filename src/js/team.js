export default class Team {
  constructor() {
    this.setContainer = new Set();
  }

  add(item) {
    if (this.setContainer.has(item)) throw new Error('Such character already exists');
    if (this.setContainer.size > 4) throw new Error('Maximum 5 characters in team');
    this.setContainer.add(item);
  }

  addAll(...items) {
    for (const item of items) { // eslint-disable-line
      if (this.setContainer.has(item)) throw new Error('Such character already exists');
      if (this.setContainer.size > 4) throw new Error('Maximum 5 characters in team');
      this.setContainer.add(item);
    }
  }

  toArray() {
    return [...this.setContainer];
  }
}

export class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 20;
    this.level = 1;
  }
}
