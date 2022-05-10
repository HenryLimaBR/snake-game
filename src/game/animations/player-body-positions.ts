import { DrawChunkPiece, TDirections } from '../types'

const normal: DrawChunkPiece[] = [
  { sx: 1, sy: 0, w: 6, h: 8, c: '#00FF75' },
]

const curve: DrawChunkPiece[] = [
  { sx: 1, sy: 0, w: 3, h: 4, c: '#00FF75' },
  { sx: 4, sy: 0, w: 3, h: 1, c: '#00FF75' },
  { sx: 4, sy: 1, w: 3, h: 3, c: '#00FF75' },
  { sx: 7, sy: 1, w: 1, h: 3, c: '#00FF75' },
  { sx: 2, sy: 4, w: 2, h: 2, c: '#00FF75' },
  { sx: 4, sy: 4, w: 4, h: 3, c: '#00FF75' }
]

export const snakeTailFrame: DrawChunkPiece[] = [
  { sx: 1, sy: 0, w: 6, h: 3, c: '#00FF75' },
  { sx: 2, sy: 3, w: 4, h: 3, c: '#00CC75' },
  { sx: 3, sy: 6, w: 2, h: 2, c: '#00AA75' }
]

export const snakeBodyPositions: { [key in TDirections]: [DrawChunkPiece[], TDirections] } = {
  'up': [normal, 'up'],
  'right': [normal, 'right'],
  'down': [normal, 'down'],
  'left': [normal, 'left'],
  'ur': [curve, 'up'],
  'rd': [curve, 'right'],
  'dl': [curve, 'down'],
  'lu': [curve, 'left']
}