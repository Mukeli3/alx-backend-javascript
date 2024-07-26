import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    const clond = new Car();
    clond._brand = this._brand;
    clond._motor = this._motor;
    clond._color = this._color;

    clond._brand = undefined;
    clond._motor = undefined;
    clond._color = undefined;

    return clond;
  }
}
