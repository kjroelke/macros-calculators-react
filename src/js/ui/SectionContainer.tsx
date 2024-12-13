import React from 'react';

export default function SectionContainer({ children, id, className }) {
	return (
		<section
			id={id}
			className={`section-container p-7 max-w-sm mb-5 rounded-2xl mx-auto border-primary border-2 ${className}`}
		>
			{children}
		</section>
	);
}
