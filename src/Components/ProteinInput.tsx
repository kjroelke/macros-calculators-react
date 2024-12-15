import React from 'react';
import { useMacros } from '../Context/MacroContext';
import Form from './Form';
import InputNumber from '../ui/InputNumber';

const proteinRange = {
	Female: '0.6 – 1.0',
	Male: '0.8 – 1.2',
};
export default function MacroForm() {
	const {
		bio: { gender },
		modifiers: { protein: modifier },
		dispatch,
	} = useMacros();
	return (
		<Form id="protein-calculator">
			<h3 className="text-primary font-bold">
				Protein Modifier (grams per lb.)
			</h3>

			<span>
				Recommended range for {gender.toLowerCase()}s is{' '}
				{proteinRange[gender]}
			</span>
			<InputNumber
				label={false}
				id="protein-modifier"
				decimal={true}
				handleChange={(ev) => {
					dispatch({ type: 'updateModifiers', payload: ev });
				}}
				value={modifier === 0 ? '' : modifier}
			/>
		</Form>
	);
}
