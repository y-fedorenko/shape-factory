'use strict';

class Shape { 
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