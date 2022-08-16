import wizardInterface from "../interfaces/humans/wizardInterface";
import Human from "./human";

class Wizard extends Human implements wizardInterface {
  // private _
  constructor(
    protected _name: string,
    protected _age: number,
    protected _magicForce: number
  ) {
    super(_name, _age);
  }
  attack(): number {
  return this._magicForce;
  }
};

export default Wizard;