export function Output() {
	return (
		<section className="answer">
			<div className="answer__header">
				<h2>Macros Breakdown</h2>
			</div>
			<div className="answer__container">
				<div className="totals">
					<div className="totals__bmr-calculator">
						<h2>BMR:</h2>
					</div>
					<div className="totals__modifiers">
						<h2>TDEE:</h2>
					</div>
					<div className="totals__calorie-goal">
						<h2>Calorie Goal:</h2>
					</div>
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
