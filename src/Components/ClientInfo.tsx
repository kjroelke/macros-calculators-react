import React from 'react';
import { useMacros } from '../MacroContext';
export default function ClientInfo() {
	const { bio, dispatch } = useMacros();
	const { age, weight, heightFt, heightIn } = bio;
	function handleChange(ev) {
		dispatch({ type: 'bio/personInfo', payload: ev });
	}

	return (
		<div id="body">
			<h3>Client Info</h3>
			<label htmlFor="weight">Weight (in pounds)</label>
			<input
				onChange={handleChange}
				name="weight"
				type="number"
				inputMode="decimal"
				step="0.1"
				id="weight"
				value={weight}
			/>
			<div id="height">
				<h4>Height</h4>
				<label htmlFor="height">Ft</label>
				<input
					onChange={handleChange}
					id="height--ft"
					type="number"
					inputMode="decimal"
					name="heightFt"
					value={heightFt}
				/>
				<label htmlFor="height">In</label>
				<input
					onChange={handleChange}
					id="height--in"
					type="number"
					inputMode="decimal"
					name="heightIn"
					value={heightIn}
					max="11"
					min="0"
				/>
			</div>
			<label htmlFor="age">Age</label>
			<input
				onChange={handleChange}
				type="number"
				inputMode="decimal"
				id="age"
				name="age"
				value={age}
			/>
		</div>
	);
}
