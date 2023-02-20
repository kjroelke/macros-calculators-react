import React, { useState } from 'react';

export class BMRCalc extends React.Component {
	constructor(props) {
		super(props);
	}
	handleSubmit(ev) {
		ev.preventDefault();
		console.log(this.props);
	}
	render() {
		return (
			<form
				id="bmr-calculator"
				data-step="0"
				className="form"
				onSubmit={(ev) => this.handleSubmit(ev)}>
				<div className="form__header">
					<h2>{this.props.title}</h2>
				</div>
				<div className="form__content">
					<Gender initalGender={this.props.personInfo.gender} />
				</div>
				<div className="form__submission">
					<button type="submit">Calculate that BMR!</button>
				</div>
			</form>
		);
	}
}
function Gender({ initalGender }) {
	const [gender, setGender] = useState(initalGender);
	const handleChange = ({ target }) => {
		setGender(target.value);
		console.log(initialGender);
	};
	return (
		<div className="radio__options" onChange={handleChange}>
			<div>
				<input type="radio" value="MALE" name="gender" />
				<label htmlFor="gender">Male</label>
			</div>
			<div>
				<input type="radio" defaultChecked value="FEMALE" name="gender" />
				<label htmlFor="gender">Female</label>
			</div>
		</div>
	);
}
// <fieldset id="body">
// 	<legend>Client Info</legend>
// 	<label htmlFor="weight">Weight (in pounds)</label>
// 	<input
// 		name="weight"
// 		type="number"
// 		inputmode="decimal"
// 		step="0.1"
// 		id="weight"
// 	/>
// 	<fieldset id="height">
// 		<legend>Height</legend>
// 		<label htmlFor="height">Ft</label>
// 		<input id="height--ft" type="number" inputmode="decimal" name="height" />
// 		<label htmlFor="height">In</label>
// 		<input id="height--in" type="number" inputmode="decimal" name="height" />
// 	</fieldset>
// 	<label htmlFor="age">Age</label>
// 	<input type="number" inputmode="decimal" id="age" name="age" />
// </fieldset>;
