import React from 'react';
import SectionContainer from '../ui/SectionContainer';
import PersonInfo from '../ui/PersonInfo';
import Calories from './Calories';
import Macros from './Macros';
import Button from './Buttons/Button';

export default function Output() {
	return (
		<SectionContainer
			className="sticky top-1 bg-white text-primary flex flex-col sm:justify-around items-stretch gap-3 drop-shadow-lg"
			id="output"
		>
			<h2 className="font-bold text-3xl">Macros Breakdown</h2>
			<PersonInfo />
			<Calories />
			<Macros />
			<Button dispatchType="reset" id="reset">
				Reset
			</Button>
		</SectionContainer>
	);
}
