// Inheritance allow parent class to extend properties to sub-classes.
const COLOR = document.getElementById("color");
const MODEL_NAME = document.getElementById("model");
const CREATE_CAR_BTN = document.getElementById("create-car-btn");

class TeslaCar {
  constructor(numberOfTyres) {
    (this.brands = "Tesla"),
      (this.numberOfTyres = numberOfTyres),
      (this.CEO = "Elon Musk");
  }
}

class TeslaOne extends TeslaCar {
  constructor(numberOfTyres, model, color, produceIn) {
    super(numberOfTyres);
    this.model = model;
    this.color = color;
    this.produceIn = produceIn;
  }
}

const carOne = new TeslaOne(6, "", "", "America");

console.log(carOne);

CREATE_CAR_BTN.addEventListener("click", () => {
  const carOne = new TeslaOne(6, MODEL_NAME.value, COLOR.value, "America");

  console.log(carOne);
});
