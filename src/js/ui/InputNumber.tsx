import React from 'react';

export default function InputNumber({
	handleChange,
	id,
	value,
	label,
}: {
	handleChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
	id: string;
	value: string;
	label: string;
}) {
	return (
		<>
			<label htmlFor={id} className="font-bold text-primary">
				{label}
			</label>
			<input
				className="border-2 border-primary rounded-md p-1"
				onChange={handleChange}
				type="text"
				id={id}
				name={id}
				value={`${value}`}
			/>
		</>
	);
}
