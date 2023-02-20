import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BMRCalc } from './Presentational/bmrCalculator';
import { MyHeader } from './Presentational/Header';
import { Modifiers } from './Presentational/modifierCalculator';
// import { Proteins } from './Presentational/proteinCalculator';
import { Output } from './Presentational/output';
import MacroMath from './Math/bmr';

const root = createRoot(document.getElementById('app'));

function App() {
	const [bio, setBio] = useState({
		gender: 'Female',
		weight: 160,
		heightFt: 5,
		heightIn: 4,
		totalInches: 64,
		age: 29,
	});
	const toggleGender = (ev) => {
		ev.preventDefault();
		setBio((prev) => {
			return { ...prev, gender: prev.gender === 'Female' ? 'Male' : 'Female' };
		});
	};
	const setPersonInfo = ({ target: { name, value } }) => {
		setBio((prev) => {
			return { ...prev, [name]: value };
		});
	};
	useEffect(() => {
		setBio((prev) => {
			const newTotal = Number(bio.heightFt) * 12 + Number(bio.heightIn);
			return { ...prev, totalInches: newTotal };
		});
	}, [bio.heightFt, bio.heightIn]);

	const [bmr, setBMR] = useState({});
	useEffect(() => {
		const calculator = new MacroMath(bio);
		const bmr = calculator.calcBMR();
		setBMR(bmr);
	}, [bio]);
	const [modifiers, setModifiers] = useState({ TDEE: 1.2, DEFICIT: 0.1 });
	const updateModifiers = ({ target: { name, value } }) => {
		console.log(name, value);
		setModifiers((prev) => {
			return { ...prev, [name]: value };
		});
	};
	useEffect(() => {
		// const energyExpenditure = calculator.calcTDEE(bmr, {
		// 	activty: tdee,
		// 	deficit: 1,
		// });
		console.log('updating modifiers');
	}, [modifiers]);
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

	return (
		<div>
			<MyHeader title="A REACTive Macro Calculator" subtitle="Eventually!" />
			<main>
				<Output
					gender={bio.gender}
					personInfo={bio}
					bmr={bmr}
					modifiers={modifiers}
				/>
				<BMRCalc
					title="Hello, there."
					personInfo={bio}
					setPersonInfo={setPersonInfo}
					toggleGender={toggleGender}
				/>
				<Modifiers updateModifiers={updateModifiers} />
			</main>
			<footer id="copyright"></footer>
		</div>
	);
}

root.render(<App />);
