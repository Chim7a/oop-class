const CLICK = document.getElementById("click-btn");
const ADD_TEXT = document.body;

console.log(ADD_TEXT);

class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  greeting() {
    return `Good morning ${this.firstName} ${this.lastName}.`;
  }

  getInitials() {
    return `Welcome ${this.firstName.slice(0, 1)}${this.lastName.slice(
      0,
      1
    )} ${this.greeting()}`;
  }
}

const userOne = new User("Chima", "Ikegbulam", 20);
const userTwo = new User("Mike", "John", 30);
const userThree = new User("Ahmad", "Mike", 200);

console.log(userOne.getInitials());

// userOne.greeting();
// userTwo.greeting();
// userThree.greeting();
// console.log(userOne);
// console.log(userTwo);
// console.log(userThree);

CLICK.addEventListener("click", () => {
  ADD_TEXT.innerHTML += `${userThree.greeting()}`;
});
