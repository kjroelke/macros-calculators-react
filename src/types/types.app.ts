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
	payload: any;
};

export type modiferLabel = { mod: number; label: string };
