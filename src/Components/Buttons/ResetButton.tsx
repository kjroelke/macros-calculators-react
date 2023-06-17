import React, { memo } from 'react';
import { useMacros } from '../../MacroContext';

function ResetButton() {
	const { dispatch } = useMacros();
	return (
		<button
			id="reset"
			onClick={(ev) => {
				ev.preventDefault();
				dispatch({ type: 'reset' });
			}}>
			Reset
		</button>
	);
}

export default memo(ResetButton);
