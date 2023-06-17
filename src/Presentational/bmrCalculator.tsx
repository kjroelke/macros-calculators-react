import React from 'react';

export function BMRCalc({ children }) {
	return (
		<section
			id="bmr-calculator"
			data-step="0"
			className="form"
			onSubmit={(ev) => ev.preventDefault()}>
			<div className="form__content">{children}</div>
		</section>
	);
}
