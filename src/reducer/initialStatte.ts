import { GameStatus, type GameContextState, Direction } from "../types";
import { buildGrid } from "./gridUtils";

const GRID_SIZE = 10;

const SNALE_HEAD = {
  row: Math.floor(GRID_SIZE / 2),
  col: Math.floor(GRID_SIZE / 2),
};

export const INITIAL_STATE: GameContextState = {
  gameStatus: GameStatus.IDLE,
  points: 0,
  direction: Direction.UP,
  rows: GRID_SIZE,
  cols: GRID_SIZE,
  vegetables: [],
  snakeHead: SNALE_HEAD,
  grid: buildGrid(GRID_SIZE, GRID_SIZE, SNALE_HEAD, []),
};
