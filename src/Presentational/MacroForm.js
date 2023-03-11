export function MacroForm({ gender, modifier, updateModifiers }) {
	function setProteinRange() {
		if (gender === 'Female') {
			recommendedRange = `0.6 – 1.0`;
		} else if (gender === 'Male') {
			recommendedRange = `0.8 – 1.2`;
		}
		return recommendedRange;
	}
	return (
		<section id="protein-calculator" data-step="2" className="form">
			<div className="form__content">
				<label htmlFor="protein">
					<strong>{gender}</strong> Protein Modifier (grams per lb.)
					<br />
					Recommended range is {setProteinRange()}.
				</label>
				<input
					type="number"
					inputMode="decimal"
					step="0.1"
					name="protein"
					id="protein-modifier"
					value={modifier}
					onChange={(ev) => updateModifiers(ev)}
				/>
			</div>
		</section>
	);
}
