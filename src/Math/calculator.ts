import type { Macros, Person, macroState, modifiers } from '../types';
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
/**
 *
 * @param tdee the tdee
 * @param deficit the cut
 * @param bmr
 * @returns
 */
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
	console.log(macros, modifiers);
	// if (state.tdee === 0) {
	// 	throw 'Do the rest of the form first!';
	// }
	// Get Form
	// const proteinMod = form.querySelector('#protein-modifier');

	// Destructure State
	// let { macros, modifiers } = this.state;
	// const { calorieGoal } = this.state;

	// Set Protein Modifier to State
	// modifiers.protein = getOptionsValue(proteinMod);

	// Calc Proteins
	calcProteins(macros.proteins, modifiers.protein, bio, calorieGoal);

	// Calc Fats
	calcFats(macros.fats, calorieGoal);

	// Calc Carbs
	calcCarbs(macros, calorieGoal);
}
function calcProteins(
	proteins: Macros,
	modifier: number,
	person: Person,
	calorieGoal: number,
) {
	let { grams, calories, percentage } = proteins;
	grams = Math.round(person.weight * modifier);
	calories = Math.round(grams * 4);
	percentage = Math.round((calories / calorieGoal) * 100);
	this.state.macros.proteins = {
		grams: grams,
		calories: calories,
		percentage: percentage,
	};
}

function calcFats(fats, calorieGoal) {
	let { grams, calories, percentage } = fats;
	percentage = 30;
	calories = Math.round((percentage / 100) * calorieGoal);
	grams = Math.round(calories / 9);
	this.state.macros.fats = {
		grams: grams,
		calories: calories,
		percentage: percentage,
	};
}

function calcCarbs(macros, goal) {
	let {
		carbs: { grams: cGrams, percentage: cPercent, calories: cCals },
		fats: { calories: fCals },
		proteins: { calories: pCals },
	} = macros;
	cCals = Math.round(goal - fCals - pCals);
	cGrams = Math.round(cCals / 4);
	cPercent = Math.round((cCals / goal) * 100);
	this.state.macros.carbs = {
		calories: cCals,
		grams: cGrams,
		percentage: cPercent,
	};
}
