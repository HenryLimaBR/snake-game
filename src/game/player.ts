import { snakeHeadFrames } from './animations/player-head-frames'
import { Animation } from './animation'
import { PlayerBody, PlayerBodyConstructorOptions } from './player-body'
import { TCoords, TDirections, TGameInfo } from './types'

export class Player extends Animation {
  private info: TGameInfo

  public position: TCoords
  public direction: TDirections = 'right'

  public body: PlayerBody[] = []

  constructor(position: TCoords = { x: 0, y: 0 }, info: TGameInfo) {
    super({ ad: snakeHeadFrames })
    this.position = position
    this.info = info
  }

  public appendBodyPiece({ position, direction, relative }: PlayerBodyConstructorOptions) {
    this.body.push(new PlayerBody({ position, direction, relative }))
  }

  private calculateMove() {
    this.body = this.body.map((bodyPiece, i, arr) => {
      const newBodyPiece = new PlayerBody({})

      newBodyPiece.tail = i === arr.length - 1

      if (i !== 0) {
        newBodyPiece.position = arr[i - 1].position
        newBodyPiece.relative = PlayerBody.compareDirection(arr[i - 1].direction, bodyPiece.direction)
        newBodyPiece.direction = arr[i - 1].direction
        return newBodyPiece
      }

      newBodyPiece.position = { x: this.position.x, y: this.position.y }
      newBodyPiece.relative = PlayerBody.compareDirection(this.direction, bodyPiece.direction)
      newBodyPiece.direction = this.direction
      return newBodyPiece
    })
  }

  public move() {
    this.calculateMove()

    switch (this.direction) {
      case 'up':
        this.position.y > 0
          ? this.position.y--
          : this.position.y = this.info.height - 1
        break
      case 'right':
        this.position.x < this.info.width - 1
          ? this.position.x++
          : this.position.x = 0
        break
      case 'down':
        this.position.y < this.info.height - 1
          ? this.position.y++
          : this.position.y = 0
        break
      case 'left':
        this.position.x > 0
          ? this.position.x--
          : this.position.x = this.info.width - 1
        break
    }
  }
}