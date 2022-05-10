import { AnimationData } from '../../types'

const frames = [
  [
    { sx: 1, sy: 1, w: 2, h: 1 },
    { sx: 5, sy: 1, w: 2, h: 1 },
    { sx: 0, sy: 2, w: 8, h: 2 },
    { sx: 1, sy: 4, w: 6, h: 1 },
    { sx: 2, sy: 5, w: 4, h: 1 },
    { sx: 3, sy: 6, w: 2, h: 1 }
  ],
  [
    { sx: 0, sy: 0, w: 3, h: 1 },
    { sx: 5, sy: 0, w: 3, h: 1 },
    { sx: -1, sy: 1, w: 10, h: 3 },
    { sx: 0, sy: 4, w: 8, h: 1 },
    { sx: 1, sy: 5, w: 6, h: 1 },
    { sx: 2, sy: 6, w: 4, h: 1 },
    { sx: 3, sy: 7, w: 2, h: 1 }
  ]
]

export const fruitHeartAnimation: AnimationData = {
  color: { primary: '#7755FF', secondary: '#AA88FF' },
  info: { width: 11, height: 11 },
  frames: [
    frames[0],
    frames[0],
    frames[0],
    frames[1]
  ]
}