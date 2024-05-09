class Storage {
  array;
  constructor(arr) {
    this.array = arr;
  }

  getItems() {
    return this.array;
  }

  addItem(item) {
    this.array.push(item);
  }

  removeItem(item) {
    if (this.array.includes(item)) {
      this.array.splice(this.array.indexOf(item), 1);
    }
  }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
