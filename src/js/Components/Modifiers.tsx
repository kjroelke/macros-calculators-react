import React from "react";
import { useMacros } from "../Context/MacroContext";
import FormSelect from "../ui/FormSelect";
import SectionContainer from "../ui/SectionContainer";

const activity = [
	{
		mod: 1.2,
		label: "Sedentary | < 5k Steps",
	},
	{ mod: 1.375, label: "Lightly Active" },
	{ mod: 1.46, label: "Light to Moderately Active" },
	{ mod: 1.55, label: "Moderately Active" },
	{ mod: 1.725, label: "Very Active" },
	{ mod: 1.9, label: "Extremely Active" },
];
const deficit = [
	{ mod: 0.1, label: "10%" },
	{ mod: 0.15, label: "15%" },
	{ mod: 0.2, label: "20%" },
	{ mod: 1, label: "Maintenance" },
];

export default function Modifiers() {
	const { dispatch } = useMacros();

	return (
		<SectionContainer id="modifiers" className="form">
			<div
				className="form__content"
				onChange={(ev) => {
					dispatch({ type: "updateModifiers", payload: ev });
				}}>
				<FormSelect
					label="Activity Modifier"
					options={activity}
					id="activity"
				/>
				<FormSelect
					label="Deficit Selector"
					options={deficit}
					id="deficit"
				/>
			</div>
		</SectionContainer>
	);
}
