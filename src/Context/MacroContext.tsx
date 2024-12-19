// 3rd Parties
import React, { useReducer, ChangeEvent, createContext } from 'react';

// Types
import { AppState, reducerAction } from '../lib/types/types.app';
import { calcBMR, calcCalorieGoal, calcMacros } from '../lib/Math/calculator';
import { macroState } from '@/lib/types/types.macros';

const initialState: AppState = {
    bio: {
        gender: 'Female',
        weight: 140,
        heightFt: 5,
        heightIn: 4,
        totalInches: 64,
        age: 29,
    },
    macros: {
        fats: {
            percentage: 30,
            grams: 0,
            calories: 0,
        },
        proteins: {
            percentage: 30,
            grams: 0,
            calories: 0,
        },
        carbs: {
            percentage: 0,
            grams: 0,
            calories: 0,
        },
    },
    modifiers: {
        activity: 1.2,
        deficit: 0.1,
        protein: 0.8,
    },
    calorieGoal: 1800,
    tdee: 2000,
    bmr: 1429,
    carbCycle: false,
};

function calcAllMacros(state: AppState): AppState {
    const bmr = calcBMR(state.bio);
    const newTdee = Math.round(bmr * state.modifiers.activity);
    const newState = {
        ...state,
        bmr,
        tdee: newTdee,
        calorieGoal: calcCalorieGoal(
            newTdee,
            state.modifiers.deficit,
            bmr,
            state.carbCycle,
        ),
    };
    if (false === state.carbCycle) {
        newState.macros = calcMacros(
            state.macros as macroState,
            state.modifiers,
            state.bio,
            state.calorieGoal as string | number,
        );
    }
    if (state.carbCycle) {
        newState.macros = {
            lowCarb: calcMacros(
                state.macros as macroState,
                state.modifiers,
                state.bio,
                newState.calorieGoal.lowCarb as string | number,
            ),
            highCarb: calcMacros(
                state.macros as macroState,
                state.modifiers,
                state.bio,
                newState.calorieGoal.highCarb as string | number,
            ),
        };
    }
    return newState;
}

function reducer(state: AppState, action: reducerAction) {
    switch (action.type) {
        case 'updateModifiers': {
            const {
                target: { name, value },
            } = action.payload as ChangeEvent<HTMLSelectElement>;
            const updatedState = {
                ...state,
                modifiers: {
                    ...state.modifiers,
                    [name]: Number(value),
                },
            };
            return calcAllMacros(updatedState);
        }

        case 'bio/gender': {
            const newGender = action.payload as 'Male' | 'Female';
            const updatedState = {
                ...state,
                bio: {
                    ...state.bio,
                    gender: newGender,
                },
            };
            return calcAllMacros(updatedState);
        }

        case 'bio/personInfo': {
            const {
                target: { name, value },
            } = action.payload as ChangeEvent<HTMLInputElement>;
            const updatedState = {
                ...state,
                bio: {
                    ...state.bio,
                    [name]: value === '' ? 0 : Number(value),
                },
            };
            updatedState.bio.totalInches =
                updatedState.bio.heightFt * 12 + updatedState.bio.heightIn;
            return calcAllMacros(updatedState);
        }
        case 'carbCycle': {
            return state;
        }

        default:
            throw new Error(`Unknown Action! ${action.type}`);
    }
}

interface MacroContextType {
    bio: AppState['bio'];
    macros: AppState['macros'];
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
    const { bio, macros, modifiers, calorieGoal, tdee, bmr, carbCycle } = state;
    return (
        <MacroContext.Provider
            value={{
                bio,
                macros,
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
