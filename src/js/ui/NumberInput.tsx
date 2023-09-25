import React, { ChangeEventHandler, HTMLAttributes } from 'react';

export default function NumberInput({
	changeHandler,
	value,
	mode,
	step,
	id,
	name,
	labelText,
	constrain,
}: {
	changeHandler: ChangeEventHandler;
	value: number;
	mode: 'decimal' | 'numeric';
	id: string;
	labelText: string;
	step?: string;
	name?: string;
	constrain?: { min: number; max: number };
}) {
	const inputName = name ?? id;

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'stretch',
			}}
		>
			<label
				htmlFor={id}
				dangerouslySetInnerHTML={{ __html: labelText }}
			/>
			<input
				onChange={changeHandler}
				name={inputName}
				type="number"
				inputMode={mode}
				{...(step ? { step: step } : {})}
				id={id}
				value={value}
				{...(constrain
					? { min: constrain.min, max: constrain.max }
					: {})}
			/>
		</div>
	);
}
