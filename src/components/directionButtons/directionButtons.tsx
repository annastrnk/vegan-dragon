import { useGameContext } from "../../context/gameContext";
import { ActionType, Direction, GameStatus } from "../../types";
import classes from './directionButtons.module.css'

export function DirectionButtons() {
    const [state, dispatch] = useGameContext()
    const isPlaying = state.gameStatus === GameStatus.PLAYING
    const setDirection =(direction:Direction)=>{
        if (!isPlaying) return
        dispatch({
            type:ActionType.SET_DIRECTION,
            direction
        })
    }

    return (
        <div className={classes.gamepad}>
          <button className={classes.contolBtn} onClick={() => setDirection(Direction.UP)}>👆</button>
          <div className={classes.middleRow}>
            <button className={classes.contolBtn}  onClick={() => setDirection(Direction.LEFT)}>👈</button>
            <button className={classes.contolBtn}  onClick={() => setDirection(Direction.RIGHT)}>👉</button>
          </div>
          <button className={classes.contolBtn}  onClick={() => setDirection(Direction.DOWN)}>👇</button>
        </div>
      );
}