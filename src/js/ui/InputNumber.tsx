import React from 'react';

export default function InputNumber({
	handleChange,
	id,
	value,
	label,
	decimal,
}: {
	handleChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
	id: string;
	value: number;
	label: string;
	decimal?: boolean;
}) {
	return (
		<>
			<label htmlFor={id} className="font-bold text-primary">
				{label}
			</label>
			<input
				className="border-2 border-primary rounded-md p-1"
				onChange={handleChange}
				type="number"
				inputMode={decimal ? 'decimal' : 'numeric'}
				step={decimal ? '0.1' : '1'}
				id={id}
				name={id}
				value={value}
			/>
		</>
	);
}