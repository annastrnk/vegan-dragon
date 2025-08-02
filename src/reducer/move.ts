import {
  CellType,
  GameStatus,
  type GameContextState,
  type SnakeSegment,
  type Vegetable,
} from "../types";
import { buildGrid, findDirection, findTail, getNextCell } from "./gridUtils";
import { setGameStatus } from "./setGameStatus";
import { POINTS_INCREMENT } from "../constants";

function moveSnake(state: GameContextState) {
  const { rows, cols, snakeHead, grid, direction } = state;
  const { row, col } = snakeHead;
  const [newRow, newCol] = getNextCell(row, col, rows, cols, direction);
  if (grid[newRow][newCol] === CellType.SNAKE) {
    return null;
  }
  return moveSegment(snakeHead, newRow, newCol);
}

function moveSegment(
  segment: SnakeSegment,
  row: number,
  col: number
): SnakeSegment {
  return {
    row,
    col,
    next: segment.next && moveSegment(segment.next, segment.row, segment.col),
  };
}

/**
 * @returns { intersections: number, newSnakeHead: SnakeSegment, remainingVegetables: Vegetable[] }
 */
function checkIntersection(
  state: GameContextState,
  oldSnakeHead: SnakeSegment,
  snakeHead: SnakeSegment
): {
  intersections: number;
  newSnakeHead: SnakeSegment;
  remainingVegetables: Vegetable[];
} {
  const { rows, cols, vegetables } = state;
  let intersections = 0;
  let segment: SnakeSegment | undefined = snakeHead;
  let tail: SnakeSegment = snakeHead;
  const remainingVegetables = [...vegetables];

  while (segment) {
    const { row, col } = segment;
    const index = remainingVegetables.findIndex((veg) => {
      return veg.row === row && veg.col === col;
    });
    if (index !== -1) {
      intersections++;
      remainingVegetables.splice(index, 1);
    }
    tail = segment;
    segment = segment.next;
  }

  if (intersections === 0) {
    return { intersections: 0, newSnakeHead: snakeHead, remainingVegetables };
  }

  const oldTail = findTail(oldSnakeHead);

  tail.next = {
    row: oldTail.row,
    col: oldTail.col,
  };
  tail = tail.next;

  const nextDirection = findDirection(tail, oldTail);
  if (nextDirection) {
    for (let i = 1; i < intersections; i++) {
      const [newRow, newCol] = getNextCell(
        tail.row,
        tail.col,
        rows,
        cols,
        nextDirection
      );
      tail.next = {
        row: newRow,
        col: newCol,
      };
      tail = tail.next;
    }
  }

  return { intersections, newSnakeHead: snakeHead, remainingVegetables };
}

export function move(state: GameContextState): GameContextState {
  const { rows, cols, points, snakeHead } = state;

  const newSnakeHead = moveSnake(state);
  if (!newSnakeHead) {
    return setGameStatus(state, GameStatus.FINISHED);
  }

  const {
    intersections,
    newSnakeHead: updatedSnakeHead,
    remainingVegetables,
  } = checkIntersection(state, snakeHead, newSnakeHead);

  return {
    ...state,
    snakeHead: updatedSnakeHead,
    vegetables: remainingVegetables,
    grid: buildGrid(rows, cols, updatedSnakeHead, remainingVegetables),
    points: points + POINTS_INCREMENT * intersections,
  };
}
