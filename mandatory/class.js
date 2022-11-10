
class Animal {
  constructor(name) {
    this.name = name;
  }
  show() {
    console.log(
      `My name is ${this.name}`
    );
  }
}
const Wild = new Animal("tommy");
Wild.show();








class Dog extends Animal {
  constructor(name, leg) {
    super(name);
    this.leg = leg;
  }
  show() {
    super.show();
    console.log(`I have${this.leg} legs`);
  }
}

const Sptilz = new Dog("tommy", 4);
Sptilz.show();
