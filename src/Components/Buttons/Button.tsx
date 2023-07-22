import React from 'react';
import { useMacros } from '../../MacroContext';
export default function Button({
	children,
	dispatchType,
	id = undefined,
}: {
	id?: string;
	children: any;
	dispatchType: string;
}) {
	const { dispatch } = useMacros();
	return (
		<button
			id={`${id ?? ''}`}
			onClick={(ev) => {
				ev.preventDefault();
				dispatch({ type: dispatchType });
			}}>
			{children}
		</button>
	);
}
