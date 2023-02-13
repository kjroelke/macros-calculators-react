export function Modifiers() {
    return (<form id="modifiers" data-step="1" className="form inactive">
				<div className="form__header">
					<h2>Step 2: Modifiers!</h2>
				</div>
				<div className="form__content">
					<div className="form__content--tdee">
						<label for="TDEE">Total Daily Energy Expenditure</label>
						<select name="TDEE" id="tdee">
							<option value="1.2">Sedentary | < 5k Steps</option>
							<option value="1.375">Lighty Active</option>
							<option value="1.46">Light to Moderately Active</option>
							<option value="1.55">Moderately Active</option>
							<option value="1.725">Very Active</option>
							<option value="1.9">Extremely Active</option>
						</select>
					</div>
					<div className="form__content--deficit">
						<label for="deficit">Deficit Selector</label>
						<select name="deficit" id="deficit">
							<option value=".1">10%</option>
							<option value=".15">15%</option>
							<option value=".2" selected>20%</option>
							<option value="1">Maintenance</option>
						</select>
					</div>
				</div>
				<div className="form__submission">
					<button type="submit">Submit those modifiers!</button>
				</div>
			</form>)
}