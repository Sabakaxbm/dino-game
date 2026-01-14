import { Dino } from './dino.model'

interface UpdateDinoParams {
  dino: Dino
  gravity: number
  groundY: number
}

export const updateDino = ({ dino, gravity, groundY }: UpdateDinoParams) => {
  dino.velocityY += gravity
  dino.y += dino.velocityY

  if (dino.y >= groundY) {
    dino.y = groundY
    dino.velocityY = 0
    dino.isJumping = false
  }
}
