import React from 'react';
import { useMacros } from '../../MacroContext';

export default function GenderButton() {
	const {
		bio: { gender },
		dispatch,
	} = useMacros();

	return (
		<div className="form__content--gender">
			<p>
				Current Gender: <span className="current-gender">{gender}</span>
			</p>
			<button
				onClick={(ev) => {
					ev.preventDefault();
					dispatch({ type: 'bio/gender' });
				}}>
				Toggle Gender{' '}
			</button>
		</div>
	);
}
