import music from '../assets/audio/music.ogg'
import fruitSound from '../assets/audio/fruit.ogg'
import failSound from '../assets/audio/fail.ogg'

export class AudioPlayer {
  private background: HTMLAudioElement

  constructor() {
    this.background = new Audio(music)
    this.background.volume = 0.9
    this.background.loop = true
  }

  public bgPlay() {
    this.background.play()
  }

  public bgStop() {
    this.background.pause()
    this.background.currentTime = 0
  }

  public fruitCollected() {
    const fruit = new Audio(fruitSound)
    fruit.volume = 1
    fruit.play()
  }

  public gameOver() {
    const fail = new Audio(failSound)
    fail.volume = 1
    fail.play()

    return new Promise(res => fail.addEventListener('timeupdate', () => fail.currentTime > 0.9 ? res(null) : null))
  }
}