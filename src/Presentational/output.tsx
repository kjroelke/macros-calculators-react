import React from 'react';
export default function Output({
	gender,
	personInfo,
	bmr,
	calorieGoal,
	tdee,
	macros,
}) {
	function returnHeightDetails() {
		if (personInfo.heightFt % 12 === 0) {
			return `${personInfo.heightFt} ft (${personInfo.totalInches} inches)`;
		} else {
			return `${personInfo.heightFt} ft, ${personInfo.heightIn} in (${personInfo.totalInches} inches)`;
		}
	}
	return (
		<section className="answer">
			<div className="answer__header">
				<h2>Macros Breakdown</h2>
			</div>
			<div className="answer__container">
				<PersonInfo
					gender={gender}
					weight={personInfo.weight}
					age={personInfo.age}
					height={returnHeightDetails()}
				/>
				<Calories bmr={bmr} calorieGoal={calorieGoal} tdee={tdee} />
				<Macros macros={macros} />
				<input type="reset" id="reset" />
			</div>
		</section>
	);
}

function PersonInfo({ gender, weight, age, height }) {
	return (
		<div className="personInfo">
			<p>
				Gender: <strong>{gender}</strong>
			</p>
			<p>
				Current Height: <strong>{height}</strong>
			</p>
			<p>
				Current Weight: <strong>{weight}</strong>
			</p>
			<p>
				Current Age: <strong>{age}</strong>
			</p>
		</div>
	);
}
function Calories({ bmr, calorieGoal, tdee }) {
	return (
		<div className="totals">
			<p>
				BMR: <strong>{bmr} calories</strong>
			</p>
			<p>
				TDEE: <strong>{tdee} calories</strong>
			</p>
			<p>
				Calorie Goal: <strong>{calorieGoal} calories</strong>
			</p>
		</div>
	);
}
function Macros({ macros: { fats, carbs, proteins } }) {
	return (
		<div className="percents">
			<div className="percent__proteins">
				<p>
					<strong>Protein:</strong>
					<br />
					<span>
						{proteins.grams}g ({proteins.percentage}%)
					</span>
				</p>
			</div>
			<div className="percent__fats">
				<p>
					<strong>Fat:</strong>
					<br />
					<span>
						{fats.grams}g ({fats.percentage}%)
					</span>
				</p>
			</div>
			<div className="percent__carbs">
				<p>
					<strong>Carbs:</strong>
					<br />
					<span>
						{carbs.grams}g ({carbs.percentage}%)
					</span>
				</p>
			</div>
		</div>
	);
}
