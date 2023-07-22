import React, { memo } from 'react';
function Output({ children }) {
	return (
		<section className="answer">
			<div className="answer__header">
				<h2>Macros Breakdown</h2>
			</div>
			<div className="answer__container">{children}</div>
		</section>
	);
}

export default memo(Output);
