import React from 'react';
import Button from './Buttons/Button';
import ClientInfo from './ClientInfo';

import { useMacros } from '../Context/MacroContext';
import Form from './Form';

export default function BMRCalc() {
	const {
		bio: { gender },
	} = useMacros();
	return (
		<Form id="bmr-calculator">
			<div className="form__content--gender">
				<p>
					Current Gender:{' '}
					<span className="current-gender font-bold">{gender}</span>
				</p>
				<Button dispatchType="bio/gender">Toggle Gender</Button>
			</div>
			<ClientInfo />
		</Form>
	);
}
