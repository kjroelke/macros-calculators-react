export default class MacroMath {
	constructor(state) {
		this.state = state;
	}
	calcBMR() {
		const height = this.state.totalInches;
		const bmr =
			this.state.gender === 'Female'
				? this.#calcFemaleBMR(height)
				: this.#calcMaleBMR(height);
		return bmr;
	}
	#calcFemaleBMR(height) {
		return Math.round(
			655 + 4.35 * this.state.weight + 4.7 * height - 4.7 * this.state.age,
		);
	}
	#calcMaleBMR(height) {
		return Math.round(
			66 + 6.23 * this.state.weight + 12.7 * height - 6.8 * this.state.age,
		);
	}
	calcTDEE(bmr, modifiers) {
		const tdee = Math.round(bmr * modifiers.activity);
		const calorieGoal = this.#calcCalorieGoal(tdee, modifiers.deficit, bmr);
		return { tdee: tdee, calorieGoal: calorieGoal };
	}

	#calcCalorieGoal(tdee, deficit, bmr) {
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

	calcMacros({ macros, modifier, calorieGoal }) {
		const { proteins, fats } = macros;
		const macroObject = {};
		// Calc Proteins
		macroObject.proteins = this.#calcProteins(proteins, modifier, calorieGoal);

		// Calc Fats
		macroObject.fats = this.#calcFats(fats, calorieGoal);

		// Calc Carbs
		const currentMacros = { ...macros, ...macroObject };
		macroObject.carbs = this.#calcCarbs(currentMacros, calorieGoal);
		return macroObject;
	}
	#calcProteins(
		{ proteins: grams, calories, percentage },
		modifier,
		calorieGoal,
	) {
		grams = Math.round(this.state.weight * modifier);
		calories = Math.round(grams * 4);
		percentage = Math.round((calories / calorieGoal) * 100);
		return {
			grams: grams,
			calories: calories,
			percentage: percentage,
		};
	}

	#calcFats({ grams, calories, percentage }, calorieGoal) {
		percentage = 30;
		calories = Math.round((percentage / 100) * calorieGoal);
		grams = Math.round(calories / 9);
		return {
			grams: grams,
			calories: calories,
			percentage: percentage,
		};
	}

	#calcCarbs(macros, goal) {
		let {
			carbs: { grams: cGrams, percentage: cPercent, calories: cCals },
			fats: { calories: fCals },
			proteins: { calories: pCals },
		} = macros;
		cCals = Math.round(goal - fCals - pCals);
		cGrams = Math.round(cCals / 4);
		cPercent = Math.round((cCals / goal) * 100);
		return {
			calories: cCals,
			grams: cGrams,
			percentage: cPercent,
		};
	}
}
