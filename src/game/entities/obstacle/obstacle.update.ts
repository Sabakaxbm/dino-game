import { Obstacle } from './obstacle.model'
import { createObstacle } from './obstacle.factory'
import { OBSTACLE_MAX_GAP, OBSTACLE_MIN_GAP } from './obstacle.constants'

export const updateObstacle = (obstacle: Obstacle, speed: number) => {
  obstacle.x -= speed
}

export const updateObstacles = ({
  obstacles,
  speed,
  canvasWidth,
  groundY
}: {
  obstacles: Obstacle[]
  speed: number
  canvasWidth: number
  groundY: number
}) => {
  obstacles.forEach((o) => updateObstacle(o, speed))

  // удалить вышедшие
  for (let i = obstacles.length - 1; i >= 0; i--) {
    if (obstacles[i].x + obstacles[i].width < 0) {
      obstacles.splice(i, 1)
    }
  }

  const lastObstacle = obstacles[obstacles.length - 1]

  const gap =
    Math.random() * (OBSTACLE_MAX_GAP - OBSTACLE_MIN_GAP) + OBSTACLE_MIN_GAP

  if (!lastObstacle || lastObstacle.x < canvasWidth - gap) {
    obstacles.push(createObstacle(canvasWidth, groundY))
  }
}
