import { macroState, modifiers } from './types.macros';
import { Person } from './types.person';

export type AppState = {
	bio: Person;
	macros: macroState;
	modifiers: modifiers;
	calorieGoal: number;
	tdee: number;
};

export type reducerAction = {
	type: string;
	payload: any;
};
