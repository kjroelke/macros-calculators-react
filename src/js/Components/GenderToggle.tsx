import { Switch } from '@mui/material';
import React from 'react';
import { useMacros } from '../Context/MacroContext';

export default function GenderToggle() {
	const {
		bio: { gender },
		dispatch,
	} = useMacros();
	return (
		<div className="form__content--gender">
			<span className="current-gender">Male</span>
			<Switch
				checked={gender === 'Female'}
				onChange={() => {
					dispatch({ type: 'bio/gender' });
				}}
				inputProps={{ 'aria-label': 'controlled' }}
			/>
			<span className="current-gender">Female</span>
		</div>
	);
}
