import { GameStatus } from "./../types";
import type { GameContextState } from "../types";

export function setGameStatus(
  state: GameContextState,
  gameStatus: GameStatus
): GameContextState {
  return {
    ...state,
    gameStatus,
  };
}
