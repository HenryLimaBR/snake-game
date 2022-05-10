import { AnimationData, DrawChunkPiece } from '../types'

const frames: DrawChunkPiece[][] = [
  [
    { sx: 1, sy: 4, w: 6, h: 4, c: '#00FF75' },
    { sx: 2, sy: 3, w: 4, h: 1, c: '#00FF75' },
    { sx: 3, sy: 2, w: 1, h: 1, c: '#FF7500' },
    { sx: 3, sy: 1, w: 1, h: 1, c: '#FF7500' },
    { sx: 4, sy: 0, w: 1, h: 1, c: '#FF7500' },
    { sx: 2, sy: 5, w: 1, h: 1, c: '#0075FF' },
    { sx: 5, sy: 5, w: 1, h: 1, c: '#0075FF' }
  ],
  [
    { sx: 1, sy: 4, w: 6, h: 4, c: '#00FF75' },
    { sx: 2, sy: 3, w: 4, h: 1, c: '#00FF75' },
    { sx: 4, sy: 2, w: 1, h: 1, c: '#FF7500' },
    { sx: 4, sy: 1, w: 1, h: 1, c: '#FF7500' },
    { sx: 3, sy: 0, w: 1, h: 1, c: '#FF7500' },
    { sx: 2, sy: 5, w: 1, h: 1, c: '#0075FF' },
    { sx: 5, sy: 5, w: 1, h: 1, c: '#0075FF' }
  ]
]

export const snakeHeadFrames: AnimationData = {
  color: { primary: '#00FF75', secondary: '#00CC75' },
  info: { width: 8, height: 8 },
  frames: [
    frames[0],
    frames[0],
    frames[1],
    frames[1]
  ]
}
