import { useState, type ReactNode, createContext, type Dispatch, type SetStateAction } from "react";
import { MAX_MOVE_DELAY, MOVE_DELAY } from "../constants";
import { createContextHook } from "../hooks/createContextHook";

export type SettingContexState={
    useAlternativeGrid : boolean;
    setuserAlternativeGrid:Dispatch<SetStateAction<boolean>>;
    moveDelay:number;
    changeMoveDelay:()=>void;
}

const SettingsContext = createContext<SettingContexState | undefined>(undefined)

export const useSettingsConext = createContextHook(SettingsContext, SettingContextProvider)

export default function SettingContextProvider({children}:{children:ReactNode}){
    const [useAlternativeGrid, setuserAlternativeGrid] =useState <boolean>(false)
    const [moveDelay, setMoveDelay]= useState<number>(MOVE_DELAY)

    const changeMoveDelay =()=>{
        setMoveDelay((value)=>{
            return value === MAX_MOVE_DELAY ? MOVE_DELAY :value +MOVE_DELAY;
        })
    }

    const contextValue:SettingContexState={
        useAlternativeGrid,
        setuserAlternativeGrid,
        moveDelay,
        changeMoveDelay
    }
    return <SettingsContext.Provider value={contextValue}>{children}</SettingsContext.Provider>
    
}