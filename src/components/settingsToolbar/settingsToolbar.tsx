import { useSettingsConext } from "../../context/settingsContext";
import classes from './settingsToolbar.module.css'

export default function SettingsToolbar() {
  const { setuserAlternativeGrid, moveDelay, changeMoveDelay } =
    useSettingsConext();
  const moveDelaySecond = (moveDelay / 1000).toFixed(1);

  const switchGrid = () => {
    setuserAlternativeGrid((value) => !value);
  };
  return (
    <div className={classes.wpapper}>
      <button className={classes.btn} onClick={switchGrid}>Switch grid</button>
      <button className={classes.btn} onClick={changeMoveDelay}>
        {`Move delay: ${moveDelaySecond}s`}
      </button>
    </div>
  );
}
