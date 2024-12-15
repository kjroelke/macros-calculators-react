import React from 'react';
import { useMacros } from '../Context/MacroContext';

function Calories() {
	const { bmr, calorieGoal, tdee } = useMacros();
	return (
		<div className="totals w-full">
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

export default Calories;
