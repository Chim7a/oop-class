// Polymorphism allows a subclass to change the logic of an inherited method from the parent class.

class Animal {
  constructor(name) {
    this.name = name;
  }

  animalSound() {
    return "Meow Meow";
  }
}

class CatAnimal extends Animal {
  constructor(name, attitude) {
    super(name);
    this.attitude = attitude;
  }
}

const myCat = new CatAnimal("Lisa", "Calm");

console.log(myCat.animalSound());

class Dog extends Animal {
  constructor(name, attitude) {
    super(name);
    this.attitude = attitude;
  }

  animalSound() {
    return "Whoof Whoof";
  }
}

const dog = new Dog("Rex", "Lovely");
console.log(dog.animalSound());
