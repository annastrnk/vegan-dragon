import { generateRandomInt } from "../utils/generateRandomInt";
import { VEGETABLES } from "../constants";
import type { GameContextState, Vegetable } from "../types";
import { buildGrid } from "./gridUtils";
import { getRandomArrayElement } from "../utils/getRandomArrayElement";

export function spawnVegetable(state: GameContextState): GameContextState {
  const { rows, cols, snakeHead, vegetables } = state;

  const randomVegetable: Vegetable = {
      row: generateRandomInt(0, rows - 1),
      col: generateRandomInt(0, cols - 1),
      character: getRandomArrayElement(VEGETABLES),
  };

  const updatedVegetables = [...vegetables, randomVegetable];

  return {
      ...state,
      vegetables: updatedVegetables,
      grid: buildGrid(rows, cols, snakeHead, updatedVegetables),
  };
}
