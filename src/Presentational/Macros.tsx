import React from 'react';
import { useMacros } from '../MacroContext';

function Macros() {
	const {
		macros: { fats, carbs, proteins },
	} = useMacros();
	return (
		<div className="percents">
			<div className="percent__proteins">
				<p>
					<strong>Protein:</strong>
					<br />
					<span>
						{proteins.grams}g ({proteins.percentage}%)
					</span>
				</p>
			</div>
			<div className="percent__fats">
				<p>
					<strong>Fat:</strong>
					<br />
					<span>
						{fats.grams}g ({fats.percentage}%)
					</span>
				</p>
			</div>
			<div className="percent__carbs">
				<p>
					<strong>Carbs:</strong>
					<br />
					<span>
						{carbs.grams}g ({carbs.percentage}%)
					</span>
				</p>
			</div>
		</div>
	);
}

export default Macros;
