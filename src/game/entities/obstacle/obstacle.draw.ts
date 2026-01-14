import { Obstacle } from './obstacle.model'

export const drawObstacle = (
  ctx: CanvasRenderingContext2D,
  obstacle: Obstacle
) => {
  ctx.fillStyle = 'red'
  ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height)
}
