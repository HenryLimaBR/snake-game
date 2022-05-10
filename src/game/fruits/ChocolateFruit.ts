import { fruitHeartAnimation } from '../animations/fruits/heart-fruit-animation'
import { GameFruit } from '../fruit'

type HeartFruitConstructorOptions = {
  x: number, y: number
}

export class HeartFruit extends GameFruit {
  constructor({ x, y }: HeartFruitConstructorOptions) {
    super({ x, y, ad: fruitHeartAnimation })
  }
}