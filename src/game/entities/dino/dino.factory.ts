import { Dino } from './dino.model'
import { DINO_WIDTH, DINO_HEIGHT } from './dino.constants'

export const createDino = (groundY: number): Dino => ({
  x: 50,
  y: groundY,
  width: DINO_WIDTH,
  height: DINO_HEIGHT,
  velocityY: 0,
  isJumping: false
})
