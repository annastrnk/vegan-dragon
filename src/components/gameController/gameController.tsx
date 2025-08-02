import { MOVES_PER_SPAWN } from "../../constants";
import { useSettingsConext } from "../../context/settingsContext";
import { ActionType } from "../../types";
import { useHandleDirectiom } from "./useHandleDirection";
import { useIntervalAction } from "./useIntervalAction";

export default function GameController():null{
    const{moveDelay} = useSettingsConext()

    useHandleDirectiom()
    useIntervalAction(ActionType.MOVE,moveDelay)
    useIntervalAction(ActionType.SPAWN_VEGETABLE, moveDelay* MOVES_PER_SPAWN)

    return null
}