import { Dino } from './dino.model'

export const drawDino = (ctx: CanvasRenderingContext2D, dino: Dino) => {
  ctx.fillStyle = 'green'
  ctx.fillRect(dino.x, dino.y, dino.width, dino.height)
}
