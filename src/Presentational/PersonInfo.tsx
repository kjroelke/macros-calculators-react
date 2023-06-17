import React from 'react';
import { useMacros } from '../MacroContext';

function PersonInfo() {
	const {
		bio: { gender, weight, age, heightFt, heightIn, totalInches },
	} = useMacros();

	const height = returnHeightDetails();
	function returnHeightDetails() {
		if (heightFt % 12 === 0) {
			return `${heightFt} ft (${totalInches} inches)`;
		} else {
			return `${heightFt} ft, ${heightIn} in (${totalInches} inches)`;
		}
	}
	return (
		<div className="personInfo">
			<p>
				Gender: <strong>{gender}</strong>
			</p>
			<p>
				Current Height: <strong>{height}</strong>
			</p>
			<p>
				Current Weight: <strong>{weight}</strong>
			</p>
			<p>
				Current Age: <strong>{age}</strong>
			</p>
		</div>
	);
}

export default PersonInfo;
