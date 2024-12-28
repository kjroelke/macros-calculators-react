import React, { useReducer, createContext } from 'react';
import { AppState, reducerAction } from '../lib/types/types.app';
import reducer from './reducer';
import { initialState } from './initialState';

interface MacroContextType {
    bio: AppState['bio'];
    modifiers: AppState['modifiers'];
    calorieGoal: AppState['calorieGoal'];
    tdee: AppState['tdee'];
    bmr: AppState['bmr'];
    carbCycle: AppState['carbCycle'];
    dispatch: React.Dispatch<reducerAction>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const MacroContext = createContext<MacroContextType | null>(null);

export function MacroProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { bio, modifiers, calorieGoal, tdee, bmr, carbCycle } = state;
    return (
        <MacroContext.Provider
            value={{
                bio,
                carbCycle,
                modifiers,
                calorieGoal,
                tdee,
                bmr,
                dispatch,
            }}>
            {children}
        </MacroContext.Provider>
    );
}
