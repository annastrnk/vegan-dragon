import classes from "./App.module.css";

import SettingContextProvider from "./context/settingsContext";
import SettingsToolbar from "./components/settingsToolbar";
import GameContextProvider from "./context/gameContext";
import GameController from "./components/gameController/gameController";
import GameControlls from "./components/gameControls/gameControls";
import GridContoller from "./components/grid/gridController";


function App() {
  return (
    <>
      <div className={classes.root}>
        <SettingContextProvider>
          <SettingsToolbar/>
          <div className={classes.gridContainer}>
            <GameContextProvider>
              <GameController />
              <GridContoller/>
              <GameControlls />
            </GameContextProvider>
          </div>
        </SettingContextProvider>
      </div>
    </>
  );
}

export default App;
