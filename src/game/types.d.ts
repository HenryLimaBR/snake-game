export type TCoords = { x: number, y: number }

export type TCommonDirections = 'up' | 'down' | 'left' | 'right'
export type TDirections = TCommonDirections | 'ur' | 'rd' | 'dl' | 'lu'

export type DrawChunkPiece = { sx: number, sy: number, w: number, h: number, c?: string }

export type AnimationData = {
  color: { primary: string, secondary: string },
  info: { width: number, height: number }
  frames: DrawChunkPiece[][]
}

export type TGameInfo = { width: number, height: number, frac: number }