import { Dino } from './dino.model'
import { DINO_JUMP_FORCE } from './dino.constants'

export const setupDinoJump = (dino: Dino) => {
  const handler = (e: KeyboardEvent) => {
    if (e.code === 'Space' && !dino.isJumping) {
      dino.velocityY = -DINO_JUMP_FORCE
      dino.isJumping = true
    }
  }

  window.addEventListener('keydown', handler)

  return () => window.removeEventListener('keydown', handler)
}
