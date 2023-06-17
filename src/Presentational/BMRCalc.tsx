import React from 'react';

export default function BMRCalc({ children }) {
	return (
		<section id="bmr-calculator" data-step="0" className="form">
			<div className="form__content">{children}</div>
		</section>
	);
}
