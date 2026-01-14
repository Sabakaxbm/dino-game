import { Obstacle } from './obstacle.model'
import {
  OBSTACLE_MIN_WIDTH,
  OBSTACLE_MAX_WIDTH,
  OBSTACLE_HEIGHT
} from './obstacle.constants'

export const createObstacle = (
  canvasWidth: number,
  groundY: number
): Obstacle => {
  const width =
    Math.random() * (OBSTACLE_MAX_WIDTH - OBSTACLE_MIN_WIDTH) +
    OBSTACLE_MIN_WIDTH

  return {
    x: canvasWidth,
    y: groundY,
    width,
    height: OBSTACLE_HEIGHT
  }
}
