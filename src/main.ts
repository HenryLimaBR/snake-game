import { Game } from './game'
import './styles.scss'

const canvas: HTMLCanvasElement = document.querySelector('canvas.gameCanvas')!
const scoreboard: HTMLParagraphElement = document.querySelector('p.scoreBoard')!
const floatingdisplay: HTMLDivElement = document.querySelector('div.floatingDisplay')!

export const game = new Game({
  canvas,
  scoreboard,
  floatingdisplay
})

const buttonUp: HTMLButtonElement = document.querySelector('button#ud')!
const buttonLeft: HTMLButtonElement = document.querySelector('button#ld')!
const buttonRight: HTMLButtonElement = document.querySelector('button#rd')!
const buttonDown: HTMLButtonElement = document.querySelector('button#dd')!

buttonUp.addEventListener('touchstart', () => game.setDirection({ key: 'ArrowUp' }))
buttonLeft.addEventListener('touchstart', () => game.setDirection({ key: 'ArrowLeft' }))
buttonRight.addEventListener('touchstart', () => game.setDirection({ key: 'ArrowRight' }))
buttonDown.addEventListener('touchstart', () => game.setDirection({ key: 'ArrowDown' }))

buttonUp.addEventListener('contextmenu', e => e.preventDefault())
buttonLeft.addEventListener('contextmenu', e => e.preventDefault())
buttonRight.addEventListener('contextmenu', e => e.preventDefault())
buttonDown.addEventListener('contextmenu', e => e.preventDefault())