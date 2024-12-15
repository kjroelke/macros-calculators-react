import React from 'react';
import SectionContainer from '../ui/SectionContainer';
export default function Form({
	id,
	children,
	classList,
}: {
	id?: string;
	classList?: string;
	children: React.ReactNode;
}) {
	return (
		<SectionContainer
			id={id}
			className={`col-start-1 bg-white flex flex-col items-stretch ${classList}`}
		>
			<div className="flex flex-col items-stretch gap-y-3 w-full">
				{children}
			</div>
		</SectionContainer>
	);
}
