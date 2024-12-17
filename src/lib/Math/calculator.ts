import type { Macros, macroState, modifiers } from '../types/types.macros';
import { Person } from '../types/types.person';

/** Returns BMR as Number */
export function calcBMR(person: Person): number {
    const bmr = {
        Female: calcFemaleBMR(person),
        Male: calcMaleBMR(person),
    };
    if (!Object.keys(bmr).includes(person.gender)) {
        throw new Error('Gender is undefined!');
    }
    return bmr[person.gender];
}

function calcFemaleBMR({ heightFt, heightIn, age, weight }: Person) {
    const totalInches = heightFt * 12 + heightIn;
    return Math.round(655 + 4.35 * weight + 4.7 * totalInches - 4.7 * age);
}
function calcMaleBMR({ heightFt, heightIn, age, weight }: Person) {
    const totalInches = heightFt * 12 + heightIn;
    return Math.round(66 + 6.23 * weight + 12.7 * totalInches - 6.8 * age);
}

export function calcCalorieGoal(
    tdee: number,
    deficit: number,
    bmr: number,
): number | string {
    let calories: number | string = 0;
    if (1.0 > deficit) {
        calories = Math.round(tdee - tdee * deficit);
        if (calories < bmr) {
            calories = 'Too low!';
        }
    } else if (1.0 === deficit) {
        calories = tdee;
    } else if (1.0 < deficit) {
        calories = Math.round(tdee * deficit);
    }
    return calories;
}

export function calcMacros(
    macros: macroState,
    modifiers: modifiers,
    bio: Person,
    calorieGoal: number | string,
): macroState {
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
