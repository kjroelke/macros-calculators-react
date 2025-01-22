import { ChangeEvent } from 'react';
import { AppState, reducerAction } from '@/lib/types/types.app';
import { calcAllMacros } from '@/lib/Math/calcMacros';

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
            return calcAllMacros(updatedState);
        }

        case 'carbCycle': {
            return { ...state, carbCycle: action.payload as boolean };
        }
        default:
            throw new Error(`Unknown Action! ${action.type}`);
    }
}
