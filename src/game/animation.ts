import { AnimationData } from './types'

type AnimationConstructorOptions = {
  ad: AnimationData
}

export class Animation {
  public animation: AnimationData
  protected currentAnimationFrame = 0
  protected totalAnimationFrames = 0

  constructor({ ad }: AnimationConstructorOptions) {
    this.animation = ad
    this.totalAnimationFrames = ad.frames.length - 1
  }

  public next() {
    this.currentAnimationFrame >= this.totalAnimationFrames
      ? this.currentAnimationFrame = 0
      : this.currentAnimationFrame++
  }

  public get frame() {
    return this.animation.frames[this.currentAnimationFrame]
  }
}