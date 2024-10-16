// Abstraction allows us hide the underlying
// complexity behind how a method is working.

class User {
  constructor(name, yearOfBirth) {
    (this.name = name), (this.yearOfBirth = yearOfBirth);
  }

  getAge() {
    const currentYear = new Date().getFullYear();

    const userAge = currentYear - this.yearOfBirth;
    return `${this.name} is ${userAge} years old`;
  }
}

const userOne = new User("Chima", 1960);

console.log(userOne.getAge());
