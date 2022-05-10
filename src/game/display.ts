type GameDisplayConstructorOptions = {
  container: HTMLDivElement,
  start: () => void
}

type DisplayTypes = 'visible' | 'hidden'

export class Display {
  private container: HTMLDivElement
  private title = document.createElement('h1')
  private info = document.createElement('h2')
  private button = document.createElement('button')

  constructor(options: GameDisplayConstructorOptions) {
    const { container, start } = options
    this.container = container
    container.appendChild(this.title)
    container.appendChild(this.info)
    container.appendChild(this.button)

    this.title.innerText = `Bem Vindo`
    this.button.innerText = 'Jogar'

    this.button.addEventListener('touchstart', () => {
      start()
      this.setVisibility('hidden')
    })

    this.button.addEventListener('click', () => {
      start()
      this.setVisibility('hidden')
    })
  }

  public setVisibility(value: DisplayTypes) {
    this.container.style.visibility = value
  }

  public gameOver(points: number) {
    this.title.innerText = `Bateuu :'(`
    this.info.innerText = `Você Fez ${points} Pontos! ^^`
    this.button.innerText = 'Jogar Novamente'
  }
}