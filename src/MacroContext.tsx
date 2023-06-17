// 3rd Parties
import React, { createContext, useReducer, useContext } from 'react';

// Types
import { AppState, reducerAction } from './types/types.app';

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
	calorieGoal: 0,
	tdee: 0,
};

function reducer(state: AppState, action: reducerAction) {
	switch (action.type) {
		case 'bio/gender': {
			const gender = state.bio.gender === 'Female' ? 'Male' : 'Female';
			return {
				...state,
				bio: {
					...state.bio,
					gender: gender,
				},
			};
		}
		default:
			throw new Error(`Unknown Action! ${action.type}`);
	}
}

const MacroContext = createContext(null);
export function useMacros() {
	const context = useContext(MacroContext);
	if (context)
		throw new Error('Attempting to use context outside of provider!');
	return context;
}

export function MacroProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);
	const { bio } = state;
	return (
		<MacroContext.Provider value={{ bio, dispatch }}>
			{children}
		</MacroContext.Provider>
	);
}
