import { fruitHeartAnimation } from '../animations/fruits/heart-fruit-animation'
import { Fruit } from '../fruit'

type HeartFruitConstructorOptions = {
  x: number, y: number
}

export class HeartFruit extends Fruit {
  constructor({ x, y }: HeartFruitConstructorOptions) {
    super({ x, y, ad: fruitHeartAnimation })
  }
}