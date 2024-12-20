// 3rd Parties
import { createContext, useReducer, useContext } from 'react';

// Types
import { AppState, reducerAction } from '../lib/types/types.app';
import { calcBMR, calcCalorieGoal, calcMacros } from '../lib/Math/calculator';

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
};

function calcAllMacros(state: AppState): AppState {
    const bmr = calcBMR(state.bio);
    const newTdee = Math.round(bmr * state.modifiers.activity);
    const newState = {
        ...state,
        bmr,
        tdee: newTdee,
        calorieGoal: calcCalorieGoal(newTdee, state.modifiers.deficit, bmr),
        macros: calcMacros(
            state.macros,
            state.modifiers,
            state.bio,
            state.calorieGoal,
        ),
    };
    return newState;
}
function reducer(state: AppState, action: reducerAction) {
    switch (action.type) {
        case 'updateModifiers': {
            const {
                target: { name, value },
            } = action.payload;
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
            const newGender = action.payload;
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
            } = action.payload;
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
        case 'reset':
            return calcAllMacros(initialState);

        default:
            throw new Error(`Unknown Action! ${action.type}`);
    }
}

const MacroContext = createContext();

export function useMacros() {
    const context = useContext(MacroContext);
    if (!context)
        throw new Error('Attempting to use context outside of provider!');
    return context;
}

export function MacroProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { bio, macros, modifiers, calorieGoal, tdee, bmr } = state;
    return (
        <MacroContext.Provider
            value={{
                bio,
                macros,
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
