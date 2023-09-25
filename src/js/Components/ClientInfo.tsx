import React, { ChangeEvent } from 'react';
import { useMacros } from '../Context/MacroContext';
import NumberInput from '../ui/NumberInput';
import GenderToggle from './GenderToggle';

export default function ClientInfo() {
	const { bio, dispatch } = useMacros();
	const { age, weight, heightFt, heightIn } = bio;
	function handleChange(ev: ChangeEvent) {
		dispatch({ type: 'bio/personInfo', payload: ev });
	}

	return (
		<div id="body">
			<h3>Client Info</h3>
			<GenderToggle />
			<NumberInput
				labelText="Weight (in pounds)"
				changeHandler={handleChange}
				mode="decimal"
				step="0.1"
				id="weight"
				value={weight}
			/>
			<div id="height">
				<h4>Height</h4>
				<NumberInput
					labelText="Ft"
					changeHandler={handleChange}
					id="height--ft"
					mode="numeric"
					name="heightFt"
					value={heightFt}
				/>
				<NumberInput
					labelText="In"
					changeHandler={handleChange}
					id="height--in"
					mode="numeric"
					name="heightIn"
					value={heightIn}
					constrain={{ max: 11, min: 0 }}
				/>
			</div>
			<NumberInput
				labelText="Age"
				changeHandler={handleChange}
				mode="numeric"
				id="age"
				name="age"
				value={age}
			/>
		</div>
	);
}
