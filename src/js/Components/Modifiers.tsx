import React from 'react';
import { useMacros } from '../Context/MacroContext';
import FormSelect from '../ui/FormSelect';
import SectionContainer from '../ui/SectionContainer';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const activity = [
	{
		mod: 1.2,
		label: 'Sedentary | < 5k Steps',
	},
	{ mod: 1.375, label: 'Lightly Active' },
	{ mod: 1.46, label: 'Light to Moderately Active' },
	{ mod: 1.55, label: 'Moderately Active' },
	{ mod: 1.725, label: 'Very Active' },
	{ mod: 1.9, label: 'Extremely Active' },
];
const deficit = [
	{ mod: 0.1, label: '10%' },
	{ mod: 0.15, label: '15%' },
	{ mod: 0.2, label: '20%' },
	{ mod: 1, label: 'Maintenance' },
];

export default function Modifiers() {
	const { dispatch } = useMacros();

	function handleChange(ev) {
		dispatch({ type: 'updateModifiers', payload: ev });
	}

	return (
		<FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
			<InputLabel id="activity-label">Activity Modifier</InputLabel>
			<Select
				labelId="activity-label"
				id="activity"
				onChange={handleChange}
				label="Activity Modifier"
			>
				{activity.map((act) => (
					<MenuItem value={act.mod}>{act.label}</MenuItem>
				))}
			</Select>
			<InputLabel id="deficit-label">Deficit Selector</InputLabel>
			<Select
				labelId="deficit-label"
				id="deficit"
				onChange={handleChange}
				label="Deficit Selector"
			>
				{deficit.map((def) => (
					<MenuItem value={def.mod}>{def.label}</MenuItem>
				))}
			</Select>
		</FormControl>
	);
}
