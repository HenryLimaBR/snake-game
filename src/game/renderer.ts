import { snakeBodyPositions, snakeTailFrame } from './animations/player-body-positions'
import { Fruit } from './fruit'
import { Player } from './player'
import { PlayerBody } from './player-body'
import { DrawChunkPiece, TDirections } from './types'

type GameRendererConstructorOptions = {
  canvas: HTMLCanvasElement
  frac: number
}

export class Renderer {
  private canvas: HTMLCanvasElement
  private ctx: CanvasRenderingContext2D
  private frac: number

  constructor(options: GameRendererConstructorOptions) {
    const { canvas, frac = 8 } = options
    this.canvas = canvas
    this.ctx = canvas.getContext('2d')!
    this.frac = frac
  }

  public renderAnimationData(instance: Fruit) {
    const rx = instance.position.x * this.frac
    const ry = instance.position.y * this.frac
    const frame = instance.frame

    for (const { sx, sy, w, h, c } of frame) {
      this.ctx.fillStyle = c || instance.animation.color.primary
      this.ctx.fillRect(rx + sx, ry + sy, w, h)
    }
  }

  public renderSnakeBodyPart(instance: PlayerBody) {
    const rx = instance.position.x * this.frac
    const ry = instance.position.y * this.frac
    const [frame, rotation] = !instance.tail
      ? snakeBodyPositions[instance.relative]
      : [snakeTailFrame, instance.direction]

    for (const chunk of frame) {
      const { sx, sy, w, h, c } = Renderer.rotate({ ...chunk }, rotation)
      this.ctx.fillStyle = c || '#FF99FF'
      this.ctx.fillRect(rx + sx, ry + sy, w, h)
    }
  }

  public renderSnakeHead(instance: Player) {
    const rx = instance.position.x * this.frac
    const ry = instance.position.y * this.frac
    const frame = instance.frame

    for (const chunk of frame) {
      const { sx, sy, w, h, c } = Renderer.rotate({ ...chunk }, instance.direction)
      this.ctx.fillStyle = c || '#FF99FF'
      this.ctx.fillRect(rx + sx, ry + sy, w, h)
    }
  }
  
  public clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }

  public static rotate({ sx, sy, w, h, c }: DrawChunkPiece, orientation: TDirections = 'up', frac = 8): DrawChunkPiece {
    switch (orientation) {
      case 'up':
        return { sx, sy, w, h, c }
      case 'right':
        return { sx: frac - sy - h, sy: sx, w: h, h: w, c }
      case 'down':
        return { sx: frac - sx - w, sy: frac - sy - h, w: w, h: h, c }
      case 'left':
        return { sx: sy, sy: frac - sx - w, w: h, h: w, c }
      default:
        return { sx, sy, w, h, c }
    }
  }
}