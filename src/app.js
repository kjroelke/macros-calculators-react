import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BMRCalc } from './Presentational/bmrCalculator';
import { MyHeader } from './Presentational/Header';
import { Modifiers } from './Presentational/modifierCalculator';
import { Output } from './Presentational/output';
import { MacroMath } from './Math/bmr';
import { MacroForm } from './Presentational/MacroForm';
import { calcBMR } from './Math/calculator';

const root = createRoot(document.getElementById('app'));

function App() {
	const [bio, setBio] = useState({
		gender: 'Female',
		weight: 140,
		heightFt: 5,
		heightIn: 4,
		totalInches: 64,
		age: 29,
	});
	const [bmr, setBMR] = useState(1500);
	function toggleGender(ev) {
		ev.preventDefault();
		setBio((prev) => {
			return { ...prev, gender: prev.gender === 'Female' ? 'Male' : 'Female' };
		});
	}
	function setPersonInfo({ target: { name, value } }) {
		setBio((prev) => {
			return { ...prev, [name]: value };
		});
	}
	useEffect(() => {
		setBio((prev) => {
			const newTotal = Number(bio.heightFt) * 12 + Number(bio.heightIn);
			return { ...prev, totalInches: newTotal };
		});
	}, [bio.heightFt, bio.heightIn]);
	const calculator = new MacroMath(bio);
	useEffect(() => {
		// const bmr = calculator.calcBMR();
		setBMR(calcBMR(bio));
	}, [bio]);

	const [modifiers, setModifiers] = useState({
		tdee: 1.2,
		deficit: 0.1,
		protein: 0.8,
	});
	const [calorieGoal, setCalorieGoal] = useState(1800);
	const [tdee, setTdee] = useState(2000);
	const updateModifiers = ({ target: { name, value } }) => {
		setModifiers((prev) => {
			return { ...prev, [name]: Number(value) };
		});
	};

	useEffect(() => {
		const calories = calculator.calcTDEE(bmr, {
			activity: modifiers.tdee,
			deficit: modifiers.deficit,
		});
		setCalorieGoal(calories.calorieGoal);
		setTdee(calories.tdee);
	}, [modifiers, bio]);

	const [macros, setMacros] = useState({
		fats: {
			percentage: 30,
			grams: 0,
			calories: 0,
		},
		proteins: {
			percentage: 30,
			grams: 0,
			calories: 0,
		},
		carbs: {
			percentage: 0,
			grams: 0,
			calories: 0,
		},
	});
	useEffect(() => {
		// calculator.calcMacros(props);
		// setMacros(calculator.calcMacros(macros, modifiers, calorieGoal));
	}, [calorieGoal, modifiers]);
	return (
		<div>
			<MyHeader
				title="A Macro Calculator"
				subtitle="Built with ❤️ and reactjs"
			/>
			<main>
				<Output
					gender={bio.gender}
					personInfo={bio}
					bmr={bmr}
					modifiers={modifiers}
					calorieGoal={calorieGoal}
					tdee={tdee}
					macros={macros}
				/>
				<BMRCalc
					personInfo={bio}
					setPersonInfo={setPersonInfo}
					toggleGender={toggleGender}
				/>
				<Modifiers updateModifiers={updateModifiers} />
				<MacroForm
					gender={bio.gender}
					modifier={modifiers.protein}
					updateModifiers={updateModifiers}
				/>
			</main>
			<footer id="copyright"></footer>
		</div>
	);
}

root.render(<App />);
