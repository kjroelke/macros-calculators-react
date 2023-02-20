import React from 'react';
export function Output({ gender, personInfo }) {
	const returnPrettyHeight = () => {
		if (personInfo.heightFt % 12 === 0) {
			return `${personInfo.heightFt} ft`;
		} else {
			return `${personInfo.heightFt} ft, ${personInfo.heightIn} in`;
		}
	};
	return (
		<section className="answer">
			<div className="answer__header">
				<h2>Macros Breakdown</h2>
			</div>
			<div className="answer__container">
				<div className="personInfo">
					<p>
						Gender: <strong>{gender}</strong>
					</p>
					<p>
						Current Height: <strong>{returnPrettyHeight()}</strong>
					</p>
					<p>
						Current Weight: <strong>{personInfo.weight}</strong>
					</p>
					<p>
						Current Age: <strong>{personInfo.age}</strong>
					</p>
				</div>
				<div className="totals">
					<div className="totals__bmr-calculator">
						<h2>BMR:</h2>
					</div>
					<div className="totals__modifiers">
						<h2>TDEE:</h2>
					</div>
					<div className="totals__calorie-goal">
						<h2>Calorie Goal:</h2>
					</div>
				</div>
				<div className="percents">
					<div className="percent__proteins">
						<h2>Protein:</h2>
						<span>40%</span>
					</div>
					<div className="percent__fats">
						<h2>Fats:</h2>
						<span>30%</span>
					</div>
					<div className="percent__carbs">
						<h2>Carbs:</h2>
						<span>30%</span>
					</div>
				</div>
				<input type="reset" id="reset" />
			</div>
		</section>
	);
}

class MacroMath {
	constructor(state) {
		this.state = state;
	}
	calcBMR() {
		let bmr;
		const height = this.#calcHeight();
		// Calc BMR
		this.state.bmr =
			this.state.person.gender === 'Female'
				? this.#calcFemaleBMR(height)
				: this.#calcMaleBMR(height);
	}
	#calcHeight() {
		return (
			parseInt(this.state.person.heightFt) * 12 +
			parseInt(this.state.person.heightIn)
		);
	}
	#calcFemaleBMR(height) {
		return Math.round(
			655 +
				4.35 * this.state.person.weight +
				4.7 * height -
				4.7 * this.state.person.age,
		);
	}
	#calcMaleBMR(height) {
		return Math.round(
			66 +
				6.23 * this.state.person.weight +
				12.7 * height -
				6.8 * this.state.person.age,
		);
	}
	calcTDEE() {
		// calc TDEE
		this.state.tdee = Math.round(
			this.state.bmr * this.state.modifiers.activity,
		);
		this.state.calorieGoal = this.#calcCalorieGoal(
			this.state.tdee,
			this.state.modifiers.deficit,
		);
	}

	#calcCalorieGoal(tdee, deficit) {
		let calories;
		if (deficit < 1) {
			if (Math.round(tdee - tdee * deficit) < this.state.bmr) {
				calories = 'Too low!';
				return calories;
			}
			calories = Math.round(tdee - tdee * deficit);
		} else if (deficit === 1) calories = tdee;
		else if (deficit > 1) calories = Math.round(tdee * deficit);
		return calories;
	}
}
