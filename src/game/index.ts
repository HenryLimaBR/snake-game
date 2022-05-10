import { Renderer } from './renderer'
import { AudioPlayer } from './audio'
import { Display } from './display'
import { Tools } from '../utils/Tools'
import { TGameInfo } from './types'
import { Fruit } from './fruit'
import { HeartFruit } from './fruits/HeartFruit'
import { Player } from './player'

type GameConstructorOptions = {
  canvas: HTMLCanvasElement
  scoreboard: HTMLParagraphElement
  floatingdisplay: HTMLDivElement
  width?: number
  height?: number
  frac?: number
}

export class Game {
  private canvas: HTMLCanvasElement
  private scoreboard: HTMLParagraphElement

  private info: TGameInfo

  private renderer: Renderer
  private audio: AudioPlayer
  private display: Display

  private tickrate: number

  private clockState: number | undefined = undefined
  private pause = true
  private keylock = true

  private player: Player

  private fruitPosition: Fruit[] = []

  private score = 0

  constructor(options: GameConstructorOptions) {
    const {
      width = 20, height = 20, frac = 8,
      canvas, scoreboard, floatingdisplay
    } = options

    this.info = { width, height, frac }
    this.canvas = canvas
    this.scoreboard = scoreboard

    this.renderer = new Renderer({ canvas, frac })
    this.audio = new AudioPlayer()
    this.display = new Display({ container: floatingdisplay, start: this.startGame.bind(this) })

    this.tickrate = 6

    this.canvas.width = width * frac
    this.canvas.height = height * frac

    this.player = new Player({ x: 0, y: 0 }, this.info)

    document.addEventListener('keydown', ({ key }) => this.setDirection({ key }))

    this.setupGame()
  }

  private setupGame() {
    this.player.position = { x: this.info.width / 2, y: this.info.height / 2 }
    this.player.direction = 'right'

    this.player.body = []

    this.player.appendBodyPiece({
      position: {
        x: this.player.position.x - 1,
        y: this.player.position.y
      }
    })

    this.fruitPosition = []
    this.spawnRandomFruit()

    this.pause = true
    this.render()
  }

  private startGame() {
    this.score = 0
    this.scoreboard.innerText = `${this.score}`

    setTimeout(() => {
      this.audio.bgPlay()
    }, 100)

    this.clockState = setInterval(this.clock.bind(this), 1000 / this.tickrate)

    this.keylock = false
    this.pause = false
  }

  private endGame() {
    clearInterval(this.clockState)

    this.keylock = true

    this.audio.bgStop()
    this.audio.gameOver()

    this.display.gameOver(this.score)
    this.display.setVisibility('visible')

    this.setupGame()
  }

  public setDirection(event: { key: string }) {
    if (this.keylock) return

    switch (event.key) {
      case 'ArrowUp':
        if (this.player.direction === 'up') return
        if (this.player.direction !== 'down' && this.player.position.x !== this.player.body[0].position.x) {
          this.player.direction = 'up'
        }
        break
      case 'ArrowRight':
        if (this.player.direction === 'right') return
        if (this.player.direction !== 'left' && this.player.position.y !== this.player.body[0].position.y) {
          this.player.direction = 'right'
        }
        break
      case 'ArrowDown':
        if (this.player.direction === 'down') return
        if (this.player.direction !== 'up' && this.player.position.x !== this.player.body[0].position.x) {
          this.player.direction = 'down'
        }
        break
      case 'ArrowLeft':
        if (this.player.direction === 'left') return
        if (this.player.direction !== 'right' && this.player.position.y !== this.player.body[0].position.y) {
          this.player.direction = 'left'
        }
        break
    }
  }

  private incrementBodySize() {
    const { position, direction, relative } = this.player.body[this.player.body.length - 1]
    this.player.appendBodyPiece({ position, direction, relative })
  }

  private spawnRandomFruit() {
    const x = Tools.random(0, this.info.width - 1)
    const y = Tools.random(0, this.info.height - 1)
    this.fruitPosition.push(new HeartFruit({ x, y }))
  }

  private checkFruitCollision() {
    for (const pos in this.fruitPosition) {
      const { x, y } = this.fruitPosition[pos].position

      if (this.player.position.x === x && this.player.position.y === y) {
        this.fruitPosition.splice(Number(pos), 1)

        this.scoreboard.innerText = `${++this.score}`
        this.incrementBodySize()
        this.audio.fruitCollected()
        
        if (this.fruitPosition.length < 1) {
          this.spawnRandomFruit()
        }
        
        if (Tools.random(0, 4) === 4) this.spawnRandomFruit()
      }
    }
  }

  private checkPlayerCollision() {
    for (const { position } of this.player.body) {
      if (this.player.position.x === position.x && this.player.position.y === position.y) {
        this.endGame()
      }
    }
  }

  update() {
    this.player.move()
    this.checkFruitCollision()
    this.checkPlayerCollision()
  }

  private clock() {
    if (!this.pause) this.update()
    this.render()
  }

  render() {
    this.renderer.clear()

    for (const bodyPiece of this.player.body) {
      this.renderer.renderSnakeBodyPart(bodyPiece)
    }

    this.renderer.renderSnakeHead(this.player)
    this.player.next()

    for (const fruit of this.fruitPosition) {
      this.renderer.renderAnimationData(fruit)
      fruit.next()
    }
  }
} 