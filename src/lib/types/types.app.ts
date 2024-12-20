import { macroState, modifiers } from './types.macros';
import { Person } from './types.person';

export type AppState = {
    bio: Person;
    macros: macroState;
    modifiers: modifiers;
    calorieGoal: number | string;
    tdee: number;
    bmr: undefined | number;
};

export type reducerAction = {
    type: string;
    payload: unknown;
};

export type modifierLabel = { mod: number; label: string };
