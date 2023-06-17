import type { Macros, macroState, modifiers } from '../types/types.macros';
import { Person } from '../types/types.person';

/** Returns BMR as Number */
export function calcBMR(person: Person): number {
	if ('Female' === person.gender) {
		return calcFemaleBMR(person);
	} else if ('Male' === person.gender) {
		return calcMaleBMR(person);
	} else throw new Error('Gender is undefined!');
}
function calcFemaleBMR(person: Person) {
	return Math.round(
		655 + 4.35 * person.weight + 4.7 * person.totalInches - 4.7 * person.age,
	);
}
function calcMaleBMR(person: Person) {
	return Math.round(
		66 + 6.23 * person.weight + 12.7 * person.totalInches - 6.8 * person.age,
	);
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
	calorieGoal: number,
): macroState {
	macros.proteins = calcProteins(
		macros.proteins,
		modifiers.protein,
		bio,
		calorieGoal,
	);
	macros.fats = calcFats(macros.fats, calorieGoal);
	macros.carbs = calcCarbs(macros, calorieGoal);
	return macros;
}
function calcProteins(
	proteins: Macros,
	modifier: number,
	person: Person,
	calorieGoal: number,
): Macros {
	if (typeof calorieGoal === 'string') {
		alert('Calorie Goal too low!');
		return;
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
		fats: { calories: fCals },
		proteins: { calories: pCals },
	} = macros;
	cCals = Math.round(goal - fCals - pCals);
	cGrams = Math.round(cCals / 4);
	// console.log(cCals, cGrams);
	cPercent = Math.round((cCals / goal) * 100);
	const carbMacros = {
		calories: cCals,
		grams: cGrams,
		percentage: cPercent,
	};
	return carbMacros;
}
