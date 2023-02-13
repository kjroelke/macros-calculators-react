export function BMRCalculator() {
	return (
		<form id="bmr-calculator" data-step="0" className="form">
			<div className="form__header">
				<h2>Step 1: Person Info!</h2>
			</div>
			<div className="form__content">
				<fieldset id="gender">
					<legend>Gender</legend>
					<div className="radio__options">
						<div className="radio__options--option" id="option-1">
							<input type="radio" name="gender" value="Male" />
							<label for="gender">Male</label>
						</div>
						<div className="radio__options--option" id="option-2">
							<input type="radio" name="gender" checked value="Female" />
							<label for="gender">Female</label>
						</div>
					</div>
				</fieldset>
				<fieldset id="body">
					<legend>Client Info</legend>
					<label for="weight">Weight (in pounds)</label>
					<input
						required
						name="weight"
						type="number"
						inputmode="decimal"
						step="0.1"
						id="weight"
					/>
					<fieldset id="height">
						<legend>Height</legend>
						<label for="height">Ft</label>
						<input
							required
							id="height--ft"
							type="number"
							inputmode="decimal"
							name="height"
						/>
						<label for="height">In</label>
						<input
							required
							id="height--in"
							type="number"
							inputmode="decimal"
							name="height"
						/>
					</fieldset>
					<label for="age">Age</label>
					<input
						required
						type="number"
						inputmode="decimal"
						id="age"
						name="age"
					/>
				</fieldset>
			</div>
			<div className="form__submission">
				<button type="submit">Calculate that BMR!</button>
			</div>
		</form>
	);
}
