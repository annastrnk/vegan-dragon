import { GameStatus, type GameContextState } from "../types";
import { INITIAL_STATE } from "./initialStatte";


export function playAgain():GameContextState {
 return{
    ...INITIAL_STATE,
    gameStatus:GameStatus.PLAYING
 }   
}