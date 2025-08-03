import classes from "./App.module.css";

import SettingContextProvider from "./context/settingsContext";
import SettingsToolbar from "./components/settingsToolbar/settingsToolbar";
import GameContextProvider from "./context/gameContext";
import GameController from "./components/gameController/gameController";
import GameControlls from "./components/gameControls/gameControls";
import GridContoller from "./components/grid/gridController";
import { DirectionButtons } from "./components/directionButtons/directionButtons";


function App() {
  return (
    <>
      <div className={classes.root}>
        <SettingContextProvider>
          <SettingsToolbar/>
          <div className={classes.gridContainer}>
            <GameContextProvider>
              <GameController />        
               <GameControlls />
              <GridContoller/>
     <DirectionButtons/>
            </GameContextProvider>
          </div>
        </SettingContextProvider>
      </div>
    </>
  );
}

export default App;
