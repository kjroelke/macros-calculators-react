import React from 'react';
import { useMacros } from '../MacroContext';

export default function MacroForm() {
	const {
		bio: { gender },
		modifiers: { protein: modifier },
		dispatch,
	} = useMacros();
	return (
		<section id="protein-calculator" data-step="2" className="form">
			<div className="form__content">
				<label htmlFor="protein">
					<strong>{gender}</strong> Protein Modifier (grams per lb.)
					<br />
					Recommended range is {setProteinRange(gender)}.
				</label>
				<input
					type="number"
					inputMode="decimal"
					step="0.1"
					name="protein"
					id="protein-modifier"
					value={modifier === 0 ? '' : modifier}
					onChange={(ev) => dispatch({ type: 'updateModifiers', payload: ev })}
				/>
			</div>
		</section>
	);
}

function setProteinRange(gender: string): string {
	let recommendedRange = '';
	if (gender === 'Female') {
		recommendedRange = `0.6 – 1.0`;
	} else if (gender === 'Male') {
		recommendedRange = `0.8 – 1.2`;
	}
	return recommendedRange;
}
