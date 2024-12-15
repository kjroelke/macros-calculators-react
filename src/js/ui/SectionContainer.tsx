import React from 'react';

export default function SectionContainer({ children, id, className }) {
	return (
		<section
			id={id}
			className={`p-7 rounded-2xl border-primary border-2 overflow-hidden ${className}`}
		>
			{children}
		</section>
	);
}
