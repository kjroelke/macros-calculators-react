import React from 'react';

export default function SectionContainer({ children, id, className }) {
	return (
		<section id={id} className={`section-container ${className}`}>
			{children}
		</section>
	);
}
