import React from 'react';
import { modiferLabel } from '../../types/types.app';
export default function FormSelect({
	id,
	options,
	label,
}: {
	id: string;
	options: modiferLabel[];
	label: string;
}) {
	return (
		<div className={`form__content--${id} flex flex-col`}>
			<label htmlFor={id}>{label}</label>
			<select name={id} id={id}>
				{options.map((pair) => {
					return (
						<option value={pair.mod} key={pair.label}>
							{pair.label}
						</option>
					);
				})}
			</select>
		</div>
	);
}
