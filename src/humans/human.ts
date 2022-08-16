import HumanInterface from "../interfaces/humans/humanInterface";

class Human implements HumanInterface {
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
}

export default Human;