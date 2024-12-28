import { AppState } from '@/lib/types/types.app';

export const initialState: AppState = {
    bio: {
        gender: 'Female',
        weight: 140,
        heightFt: 5,
        heightIn: 4,
        totalInches: 64,
        age: 29,
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
