import React from 'react';
import { useMacros } from '../Context/MacroContext';
import Form from './Form';

function setProteinRange(gender: string): string {
	let recommendedRange = '';
	if (gender === 'Female') {
		recommendedRange = `0.6 &ndash; 1.0`;
	} else if (gender === 'Male') {
		recommendedRange = `0.8 &ndash; 1.2`;
	}
	return recommendedRange;
}

export default function MacroForm() {
	const {
		bio: { gender },
		modifiers: { protein: modifier },
		dispatch,
	} = useMacros();
	return (
		<Form id="protein-calculator">
			<label htmlFor="protein" className="grow shrink basis-auto">
				<strong>{gender}</strong> Protein Modifier (grams per lb.)
				<br />
				<span
					dangerouslySetInnerHTML={{
						__html: `Recommended range is ${setProteinRange(
							gender
						)}`,
					}}
				/>
			</label>
			<input
				className="grow shrink basis-auto"
				type="number"
				inputMode="decimal"
				step="0.1"
				name="protein"
				id="protein-modifier"
				value={modifier === 0 ? '' : modifier}
				onChange={(ev) => {
					dispatch({ type: 'updateModifiers', payload: ev });
				}}
			/>
		</Form>
	);
}
