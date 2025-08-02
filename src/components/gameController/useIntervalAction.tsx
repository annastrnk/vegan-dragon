import { useGameContext } from "../../context/gameContext";
import { useInterval } from "../../hooks/useInterval";
import { GameStatus, ActionType } from "../../types";

export function useIntervalAction(
    actionType:ActionType.MOVE | ActionType.SPAWN_VEGETABLE,
    playingDelay:number
) {
    const[state, dispatch] =useGameContext()
    const isPlaying =state.gameStatus === GameStatus.PLAYING
    const delay = isPlaying? playingDelay:null

    useInterval(()=>dispatch({type:actionType}),delay)
}