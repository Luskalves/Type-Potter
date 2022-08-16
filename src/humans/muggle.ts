import muggleInterface from "../interfaces/humans/muggleInterface";
import Human from "./human";

const mugglePhrases = [
  'loves to fly on a broom',
  'tries to do magic when alone, and fails miserably',
  'loves visiting Diagon Alley',
  'dreams of owning a phoenix, ever since he saw one'
]

class Muggle extends Human implements muggleInterface {
  constructor(
    protected _name: string,
    protected _age: number,
    protected knows: boolean
  ) {
    super(_name, _age)
  }
  knowsMagic(): string {
    if (this.knows) {
      const idx = Math.floor(Math.random() * mugglePhrases.length)
      return mugglePhrases[idx]
    }

    return 'just another common muggle'
  }
}

export default Muggle;