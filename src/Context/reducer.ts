import { ChangeEvent } from 'react';
import { AppState, reducerAction } from '@/lib/types/types.app';
import { calcAllMacros } from '@/lib/Math/calcMacros';
import { saveStateToLocalStorage } from '@/lib/utils/localStorage';

export default function reducer(state: AppState, action: reducerAction) {
    switch (action.type) {
        case 'updateModifiers': {
            const { name, value } = action.payload as {
                name: string;
                value: string;
            };
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
            const newState = calcAllMacros(updatedState);
            saveStateToLocalStorage(newState);
            return newState;
        }

        case 'carbCycle': {
            const newState = { ...state, carbCycle: action.payload as boolean };
            saveStateToLocalStorage(newState);
            return newState;
        }
        default:
            throw new Error(`Unknown Action! ${action.type}`);
    }
}
