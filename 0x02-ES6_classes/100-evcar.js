import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  static cloneCar() {
    const clond = Object.create(Car.prototype);
    clond._brand = undefined;
    clond._motor = undefined;
    clond._color = undefined;

    return clond;
  }
}
