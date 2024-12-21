import { AppState } from '../types/types.app';
import { Macros, macroState, modifiers } from '../types/types.macros';
import { Person } from '../types/types.person';
import { calcBMR } from './calcBMR';
import { calcCalorieGoal } from './calcCalorieGoal';

class MacroCalculator {
    private bio: Person;
    private modifiers: modifiers;
    private macros: macroState;
    private calorieGoal: number | string;
    private carbCycle: boolean;

    constructor(state: AppState) {
        this.bio = state.bio;
        this.modifiers = state.modifiers;
        this.macros = state.macros;
        this.calorieGoal = state.calorieGoal;
        this.carbCycle = state.carbCycle;
    }
    calcAllMacros(): AppState {
        const bmr = calcBMR(this.bio);
        const newTdee = Math.round(bmr * this.modifiers.activity);
        this.calorieGoal = calcCalorieGoal(
            newTdee,
            this.modifiers.deficit,
            bmr,
        );
        this.macros = calcMacros(
            this.macros,
            this.modifiers,
            this.bio,
            this.calorieGoal,
            this.carbCycle,
        );
        return {
            ...state,
            bmr,
            tdee: newTdee,
            calorieGoal: this.calorieGoal,
            macros: this.macros,
        };
    }
}


export function calcAllMacros(state: AppState): AppState {
    const bmr = calcBMR(state.bio);
    const newTdee = Math.round(bmr * state.modifiers.activity);
    const newState = {
        ...state,
        bmr,
        tdee: newTdee,
        calorieGoal: calcCalorieGoal(
            newTdee,
            state.modifiers.deficit,
            bmr,
        ),
        macros: calcMacros(
            state.macros,
            state.modifiers,
            state.bio,
            state.calorieGoal
            state.carbCycle,
        ),
    }
    return newState;
}


export function calcMacros(
    macros: macroState,
    modifiers: modifiers,
    bio: Person,
    calorieGoal: number | string,
    carbCycle: boolean,
): macroState | { lowCarb: macroState; highCarb: macroState } {
    if (false === carbCycle) {
        try {
            macros.proteins = calcProteins(
                macros.proteins,
                modifiers.protein,
                bio,
                Number(calorieGoal),
            );
            macros.fats = calcFats(macros.fats, Number(calorieGoal));
            macros.carbs = calcCarbs(macros, Number(calorieGoal));
            return macros;
        } catch (error) {
            console.error(error);
            alert(error);
            return macros;
        }
    }
}

function calcProteins(
    proteins: Macros,
    modifier: number,
    person: Person,
    calorieGoal: number,
): Macros {
    if (typeof calorieGoal === 'string') {
        throw new Error('Calorie Goal too low!');
    }
    let { grams, calories } = proteins;
    grams = Math.round(person.weight * modifier);
    calories = Math.round(grams * 4);
    const percentage = Math.round((calories / calorieGoal) * 100);
    const proteinMacros = {
        percentage: percentage,
        grams: grams,
        calories: calories,
    };
    return proteinMacros;
}

function calcFats(fats: Macros, calorieGoal: number): Macros {
    let { grams, calories } = fats;
    calories = Math.round((30 / 100) * calorieGoal);
    grams = Math.round(calories / 9);
    const fatMacros = {
        grams: grams,
        calories: calories,
        percentage: 30,
    };
    return fatMacros;
}

function calcCarbs(macros: macroState, goal: number): Macros {
    let {
        carbs: { grams: cGrams, percentage: cPercent, calories: cCals },
    } = macros;
    const {
        fats: { calories: fCals },
        proteins: { calories: pCals },
    } = macros;
    cCals = Math.round(goal - fCals - pCals);
    cGrams = Math.round(cCals / 4);
    cPercent = Math.round((cCals / goal) * 100);
    const carbMacros = {
        calories: cCals,
        grams: cGrams,
        percentage: cPercent,
    };
    return carbMacros;
}
