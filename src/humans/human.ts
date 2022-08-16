import HumanInterface from "../interfaces/humans/humanInterface";

class Human implements HumanInterface {
  protected _healthPoints = 20;
  constructor(
    protected _name: string,
    protected _age: number
    ) {}

  get name(): string {
    return this._name
  }

  get age(): number {
    return this._age
  };

  get healthPoints(): number {
    return this._healthPoints;
  };
}

export default Human;