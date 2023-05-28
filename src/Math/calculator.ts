import type { Person } from '../types';
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
 * Calculates TDEE
 * @param {number} bmr the bmr
 * @param modifiers
 * @returns
 */
export function calcTDEE(bmr, modifiers) {
	const tdee = Math.round(bmr * modifiers.activity);
	const calorieGoal = calcCalorieGoal(tdee, modifiers.deficit, bmr);
	return { tdee: tdee, calorieGoal: calorieGoal };
}

function calcCalorieGoal(tdee, deficit, bmr) {
	let calories;
	if (deficit < 1) {
		if (Math.round(tdee - tdee * deficit) < bmr) {
			calories = 'Too low!';
			return calories;
		}
		calories = Math.round(tdee - tdee * deficit);
	} else if (deficit === 1) calories = tdee;
	else if (deficit > 1) calories = Math.round(tdee * deficit);
	return calories;
}

export function calcMacros() {
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
	calcProteins(macros.proteins, modifiers.protein);

	// Calc Fats
	calcFats(macros.fats);

	// Calc Carbs
	calcCarbs(macros, calorieGoal);
}
function calcProteins(proteins, modifier) {
	let { grams, calories, percentage } = proteins;
	grams = Math.round(this.state.person.weight * modifier);
	calories = Math.round(grams * 4);
	percentage = Math.round((calories / this.state.calorieGoal) * 100);
	this.state.macros.proteins = {
		grams: grams,
		calories: calories,
		percentage: percentage,
	};
}

function calcFats(fats) {
	let { grams, calories, percentage } = fats;
	percentage = 30;
	calories = Math.round((percentage / 100) * this.state.calorieGoal);
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
