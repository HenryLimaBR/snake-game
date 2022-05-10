import { Animation } from './animation'
import { AnimationData, TCoords } from './types'

type GameFruitConstructorOptions = {
  x: number, y: number, ad: AnimationData
}

export class Fruit extends Animation {
  public position: TCoords = { x: 0, y: 0 }

  constructor({ x, y, ad }: GameFruitConstructorOptions) {
    super({ ad })
    this.position = { x, y }
  }
}