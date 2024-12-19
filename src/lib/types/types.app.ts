import { macroState, modifiers } from './types.macros';
import { Person } from './types.person';

export type AppState = {
    bio: Person;
    macros: macroState | { lowCarb: macroState; highCarb: macroState };
    modifiers: modifiers;
    calorieGoal: number | string | { lowCarb: number; highCarb: number };
    tdee: number;
    carbCycle: boolean;
    bmr: undefined | number;
};

export type reducerAction = {
    type:
        | 'updateModifiers'
        | 'bio/person'
        | 'bio/personInfo'
        | 'bio/gender'
        | 'carbCycle';
    payload: unknown;
};

export type modifierLabel = { mod: number; label: string };
