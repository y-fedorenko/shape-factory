'use strict';

class Shape { //this class is not required for this task, yet it is a part of assignment
  #name;
  #color;
  constructor(name, color) {
      this.#name = name;
      this.#color = color;
  }

  getName() {
      return this.#name;
  }

  getColor() {
      return this.#color;
  }

  getInfo() {
    return `${this.#color} ${this.#name}`;
}
}

export default Shape;