import { useSettingsConext } from "../context/settingsContext";

export default function SettingsToolbar() {
  const { setuserAlternativeGrid, moveDelay, changeMoveDelay } =
    useSettingsConext();
  const moveDelaySecond = (moveDelay / 1000).toFixed(1);

  const switchGrid = () => {
    setuserAlternativeGrid((value) => !value);
  };
  return (
    <div>
      <button onClick={switchGrid}>Switch grid</button>
      <button onClick={changeMoveDelay}>
        {`Move delay: ${moveDelaySecond}s`}
      </button>
    </div>
  );
}
