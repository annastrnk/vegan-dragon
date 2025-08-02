import { createContext, useReducer, type Dispatch, type ReactNode } from "react";
import { createContextHook } from "../hooks/createContextHook";
import type { Action, GameContextState } from "../types";
import { reducer } from "../reducer/reducer";
import { INITIAL_STATE } from "../reducer/initialStatte";

type GameContextType =[GameContextState, Dispatch<Action>]

const GameContext = createContext <GameContextType | undefined>(undefined)

export const useGameContext = createContextHook(GameContext, GameContextProvider)
export default function GameContextProvider({children}:{children:ReactNode}) {
    const value = useReducer(reducer, INITIAL_STATE)

    return <GameContext.Provider value={value}>{children}</GameContext.Provider>
}