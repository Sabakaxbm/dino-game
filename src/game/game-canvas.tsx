import React, { useRef, useEffect } from 'react'
import {
  createDino,
  Dino,
  DINO_HEIGHT,
  updateDino,
  drawDino,
  setupDinoJump
} from './entities/dino'

import { drawObstacle, Obstacle, GAME_SPEED } from './entities/obstacle'
import { updateObstacles } from './entities/obstacle/obstacle.update'

const CANVAS_HEIGHT = 200
const GRAVITY = 0.6

const GROUND_Y = CANVAS_HEIGHT - DINO_HEIGHT

const GameCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = 800
    canvas.height = CANVAS_HEIGHT

    const dino: Dino = createDino(GROUND_Y)

    const obstacles: Obstacle[] = []
    // Game loop
    let animationFrameId: number

    const update = () => {
      // --- динозавр ---
      updateDino({ dino, gravity: GRAVITY, groundY: GROUND_Y })

      updateObstacles({
        obstacles,
        speed: GAME_SPEED,
        canvasWidth: canvas.width,
        groundY: GROUND_Y
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // динозавр
      drawDino(ctx, dino)
      obstacles.forEach((o) => drawObstacle(ctx, o))

      // земля
      ctx.strokeStyle = 'black'
      ctx.beginPath()
      ctx.moveTo(0, GROUND_Y + DINO_HEIGHT)
      ctx.lineTo(canvas.width, GROUND_Y + DINO_HEIGHT)
      ctx.stroke()
    }

    const cleanupInput = setupDinoJump(dino)

    const gameLoop = () => {
      update()
      draw()
      animationFrameId = requestAnimationFrame(gameLoop)
    }

    gameLoop()

    // Cleanup при unmount
    return () => {
      cancelAnimationFrame(animationFrameId)
      cleanupInput()
    }
  }, [])

  return <canvas ref={canvasRef} style={{ border: '2px solid black' }} />
}

export default GameCanvas
