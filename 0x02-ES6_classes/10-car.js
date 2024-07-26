export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const clond = Object.create(Object.getPrototypeOf(this));
    clond._brand = undefined;
    clond._motor = undefined;
    clond._color = undefined;

    return clond;
  }
}
