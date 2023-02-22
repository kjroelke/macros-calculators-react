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
}
