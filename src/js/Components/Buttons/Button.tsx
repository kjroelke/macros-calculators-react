import React from 'react';
import { useMacros } from '../../Context/MacroContext';

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
			className="text-white bg-brick px-5 py-2 text-sm cursor-pointer border-brick border-4 overflow-hidden rounded-lg hover:bg-transparent hover:text-brick transition-colors ease-in-out"
			id={`${id ?? ''}`}
			onClick={(ev) => {
				ev.preventDefault();
				dispatch({ type: dispatchType });
			}}
		>
			{children}
		</button>
	);
}
