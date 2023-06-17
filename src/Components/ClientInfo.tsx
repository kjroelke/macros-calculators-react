import React from 'react';
import { useMacros } from '../MacroContext';
export default function ClientInfo() {
	const { bio } = useMacros();
	function setPersonInfo({ target: { name, value } }) {
		// setBio((prev: Person) => {
		// return { ...prev, [name]: value };
		// });
	}
	return (
		<div id="body">
			<h3>Client Info</h3>
			<label htmlFor="weight">Weight (in pounds)</label>
			<input
				onChange={(ev) => setPersonInfo(ev)}
				name="weight"
				type="number"
				inputMode="decimal"
				step="0.1"
				id="weight"
				value={bio.weight}
			/>
			<div id="height">
				<h4>Height</h4>
				<label htmlFor="height">Ft</label>
				<input
					onChange={(ev) => setPersonInfo(ev)}
					id="height--ft"
					type="number"
					inputMode="decimal"
					name="heightFt"
					value={bio.heightFt}
				/>
				<label htmlFor="height">In</label>
				<input
					onChange={(ev) => setPersonInfo(ev)}
					id="height--in"
					type="number"
					inputMode="decimal"
					name="heightIn"
					value={bio.heightIn}
					max="11"
					min="0"
				/>
			</div>
			<label htmlFor="age">Age</label>
			<input
				onChange={(ev) => setPersonInfo(ev)}
				type="number"
				inputMode="decimal"
				id="age"
				name="age"
				value={bio.age}
			/>
		</div>
	);
}
