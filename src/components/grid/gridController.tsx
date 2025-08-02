import { useGameContext } from "../../context/gameContext";
import { useSettingsConext } from "../../context/settingsContext";
import { AlternativeGrid } from "./alternativeGrid/alternativeGrid";
import { DefaultGrid } from "./defaultGrid/defaultGrid";

export default function GridContoller() {
  const [{ grid }] = useGameContext();
  const { useAlternativeGrid } = useSettingsConext();
  const Grid = useAlternativeGrid ? AlternativeGrid : DefaultGrid;

  return <Grid grid={grid} />;
}
