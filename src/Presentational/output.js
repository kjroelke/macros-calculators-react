import React from 'react';
export function Output({ gender, personInfo, bmr }) {
	const returnHeightDetails = () => {
		if (personInfo.heightFt % 12 === 0) {
			return `${personInfo.heightFt} ft (${personInfo.totalInches} inches)`;
		} else {
			return `${personInfo.heightFt} ft, ${personInfo.heightIn} in (${personInfo.totalInches} inches)`;
		}
	};
	return (
		<section className="answer">
			<div className="answer__header">
				<h2>Macros Breakdown</h2>
			</div>
			<div className="answer__container">
				<div className="personInfo">
					<p>
						Gender: <strong>{gender}</strong>
					</p>
					<p>
						Current Height: <strong>{returnHeightDetails()}</strong>
					</p>
					<p>
						Current Weight: <strong>{personInfo.weight}</strong>
					</p>
					<p>
						Current Age: <strong>{personInfo.age}</strong>
					</p>
				</div>

				<div className="percents">
					<div className="percent__proteins">
						<h2>Protein:</h2>
						<span>40%</span>
					</div>
					<div className="percent__fats">
						<h2>Fats:</h2>
						<span>30%</span>
					</div>
					<div className="percent__carbs">
						<h2>Carbs:</h2>
						<span>30%</span>
					</div>
				</div>
				<input type="reset" id="reset" />
			</div>
		</section>
	);
}
