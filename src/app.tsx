// 3rd Parties
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

// Components
import Header from './Presentational/Header';
import Output from './Presentational/output';
import Footer from './Presentational/Footer';

// Utilites
import { BMRCalc } from './Presentational/bmrCalculator';
import { Modifiers } from './Presentational/modifierCalculator';
import { MacroForm } from './Presentational/MacroForm';
import { calcBMR, calcCalorieGoal, calcMacros } from './Math/calculator';
import { MacroProvider, useMacros } from './MacroContext';

// Types
import { macroState, modifiers } from './types/types.macros';
import GenderButton from './Components/GenderButton';
import ClientInfo from './Components/ClientInfo';

const root = createRoot(document.getElementById('app'));

function App() {
	// const [bio, setBio] = useState<Person>({
	// 	gender: 'Female',
	// 	weight: 140,
	// 	heightFt: 5,
	// 	heightIn: 4,
	// 	totalInches: 64,
	// 	age: 29,
	// } as Person);
	const [bmr, setBMR] = useState<number>(1500);

	// useEffect(() => {
	// 	setBio((prev: Person) => {
	// 		const newTotal = Number(bio.heightFt) * 12 + Number(bio.heightIn);
	// 		return { ...prev, totalInches: newTotal };
	// 	});
	// }, [bio.heightFt, bio.heightIn]);
	// useEffect(() => {
	// 	setBMR(calcBMR(bio));
	// }, [bio]);

	const [modifiers, setModifiers] = useState<modifiers>({
		activity: 1.2,
		deficit: 0.1,
		protein: 0.8,
	});
	const [calorieGoal, setCalorieGoal] = useState<number>(1800);
	const [tdee, setTdee] = useState<number>(2000);

	const updateModifiers = ({ target: { name, value } }) => {
		setModifiers((prev: modifiers) => {
			return { ...prev, [name]: Number(value) };
		});
	};
	// useEffect(() => {
	// 	const newTdee = Math.round(bmr * modifiers.activity);
	// 	setTdee(newTdee);
	// 	setCalorieGoal(calcCalorieGoal(newTdee, modifiers.deficit, bmr));
	// }, [modifiers, bio]);

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
	} as macroState);
	// useEffect(() => {
	// 	setMacros(calcMacros(macros, modifiers, bio, calorieGoal));
	// }, [calorieGoal, modifiers, macros, bio]);
	return (
		<>
			<Header title="A Macro Calculator" subtitle="Built with ❤️ and reactjs" />
			<main>
				<MacroProvider>
					<GenderButton />
				</MacroProvider>
			</main>
			<Footer />
		</>
	);
}

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
