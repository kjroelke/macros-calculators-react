export function BMRCalc({ personInfo, toggleGender, setPersonInfo }) {
	return (
		<section
			id="bmr-calculator"
			data-step="0"
			className="form"
			onSubmit={(ev) => ev.preventDefault()}>
			<div className="form__content">
				<Gender initalGender={personInfo.gender} toggleGender={toggleGender} />
				<ClientInfo personInfo={personInfo} setPersonInfo={setPersonInfo} />
			</div>
		</section>
	);
}
function Gender({ initalGender, toggleGender }) {
	return (
		<div className="form__content--gender">
			<p>
				Current Gender: <span className="current-gender">{initalGender}</span>
			</p>
			<button onClick={(ev) => toggleGender(ev)}>Toggle Gender </button>
		</div>
	);
}

function ClientInfo({ personInfo, setPersonInfo }) {
	return (
		<div id="body">
			<h3>Client Info</h3>
			<label htmlFor="weight">Weight (in pounds)</label>
			<input
				onChange={(ev) => setPersonInfo(ev)}
				name="weight"
				type="number"
				inputMode="decimal"
				step="0.1"
				id="weight"
				value={personInfo.weight}
			/>
			<div id="height">
				<h4>Height</h4>
				<label htmlFor="height">Ft</label>
				<input
					onChange={(ev) => setPersonInfo(ev)}
					id="height--ft"
					type="number"
					inputMode="decimal"
					name="heightFt"
					value={personInfo.heightFt}
				/>
				<label htmlFor="height">In</label>
				<input
					onChange={(ev) => setPersonInfo(ev)}
					id="height--in"
					type="number"
					inputMode="decimal"
					name="heightIn"
					value={personInfo.heightIn}
					max="11"
					min="0"
				/>
			</div>
			<label htmlFor="age">Age</label>
			<input
				onChange={(ev) => setPersonInfo(ev)}
				type="number"
				inputMode="decimal"
				id="age"
				name="age"
				value={personInfo.age}
			/>
		</div>
	);
}
