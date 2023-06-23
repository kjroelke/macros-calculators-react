import React, { createContext, useContext, useReducer } from 'react';
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
};

function reducer(state: AppState, action: reducerAction) {
	switch (action.type) {
		case 'bio/gender':
			return {
				...state,
				bio: {
					...state.bio,
					gender: state.bio.gender === 'Female' ? 'Male' : 'Female',
				},
			};
		default:
			throw new Error(`Undefined action! ${action.type}`);
	}
}

const MacroContext = createContext(null);
export function MacroProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);
	const { bio } = state;
	return (
		<MacroContext.Provider value={{ bio, dispatch }}>
			{children}
		</MacroContext.Provider>
	);
}
export function useMacros() {
	const context = useContext(MacroContext);
	if (!context) throw new Error('Provider used outside of Context!');
	return context;
}
