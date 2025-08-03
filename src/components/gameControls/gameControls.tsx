import { useEffect, useState } from "react";
import { HIGH_SCORE_KEY } from "../../constants";
import { useGameContext } from "../../context/gameContext";
import { ActionType, GameStatus } from "../../types";
import { useLocalStorage } from "../../hooks/useLocalSrorage";
import { GameOverModal } from "./gameOverModal";
import { Score } from "./score";

import classes from "./gameContols.module.css";

export default function GameControlls() {
  const [state, dispatch] = useGameContext();
  const { gameStatus, points } = state;
  const [highScore, setHihgScore] = useLocalStorage<number>(HIGH_SCORE_KEY, 0);
  const [prevHighScore, setPrevHighScore] = useState<number>(highScore);

  useEffect(() => {
    if (gameStatus === GameStatus.FINISHED) {
      setPrevHighScore(highScore);
      setHihgScore(Math.max(highScore, points));
    }
  }, [gameStatus]);

  if (gameStatus === GameStatus.FINISHED) {
    return (
      <GameOverModal
        points={points}
        prevHighScore={prevHighScore}
        onPlayAgain={() => dispatch({ type: ActionType.PLAY_AGAIN })}
      />
    );
  }

  return (
    <div className={classes.root}>
      <div className={classes.score}>
        {gameStatus !== GameStatus.IDLE && (
          <>
            <Score value={points} delay={100} step={15} />
            <br />
          </>
        )}
        <div className={classes.wrapperBtns}>
          {gameStatus === GameStatus.IDLE && (
            <button className={classes.buttons} onClick={() => dispatch({ type: ActionType.PLAY })}>
              Start
            </button>
          )}
          {gameStatus === GameStatus.PLAYING && (
            <button className={classes.buttonsPause} onClick={() => dispatch({ type: ActionType.PAUSE })}>
              Pause
            </button>
          )}
          {gameStatus === GameStatus.PAUSED && (
            <button className={classes.buttons} onClick={() => dispatch({ type: ActionType.PLAY })}>
              Resume
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
