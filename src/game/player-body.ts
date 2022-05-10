import { TCoords, TDirections } from './types'

export type PlayerBodyConstructorOptions = {
  position?: TCoords
  direction?: TDirections
  relative?: TDirections
}

export class PlayerBody {
  public position: TCoords
  public direction: TDirections
  public relative: TDirections
  public tail = true

  constructor({ position = { x: 0, y: 0 }, direction = 'right', relative = 'right' }: PlayerBodyConstructorOptions) {
    this.position = position
    this.direction = direction
    this.relative = relative
  }

  static compareDirection(a: TDirections, b: TDirections): TDirections {
    if (a === 'down' && b === 'right' || a === 'left' && b === 'up') return 'dl'
    if (a === 'left' && b === 'down' || a === 'up' && b === 'right') return 'lu'
    if (a === 'up' && b === 'left' || a === 'right' && b === 'down') return 'ur'
    if (a === 'right' && b === 'up' || a === 'down' && b === 'left') return 'rd'

    return a || b
  }
}