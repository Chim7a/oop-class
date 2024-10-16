// let user = {
//   firstName: "Chim7a",
//   lastName: "Ikegbulam",
// };

// function getUserInitials() {
//   return `${user.firstName.slice(0, 1)}${user.lastName.slice(0, 1)}`;
// }

// function getFullName() {
//   return `${user.firstName} ${user.lastName}`;
// }

// console.log(getUserInitials());

// console.log(getFullName());

// const numbs = [1, -4, -7, 12];

// const numbers = ages.filter((num) => typeof num === "number");

// console.log(numbers);

// function addPositives(arr) {
//   let sum = 0;
//   arr.map((numb) => numb >= 0 && (sum += numb));
//   return sum === 0 ? "No Positive Values" : sum;
// }
// console.log(addPositives(numbs));

const myNames = ["Adam", "Paul", "Ringo", "bravo", "rolf"];

function canPlay(name) {
  const players = name.map((eachNameInArr) => {
    if (eachNameInArr[0] === "r" || eachNameInArr[0] === "R") {
      return `${eachNameInArr} plays banjo`;
    } else {
      return `${eachNameInArr} does not play banjo`;
    }
  });
  name = players.map((player) => console.log(player));
  return name;
}

canPlay(myNames);
