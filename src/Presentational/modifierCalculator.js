import { FormSelect } from './formOptions';

const tdee = [
	{
		mod: 1.2,
		label: 'Sedentary | < 5k Steps',
		id: crypto.randomUUID(),
	},
	{ mod: 1.375, label: 'Lightly Active', id: crypto.randomUUID() },
	{ mod: 1.46, label: 'Light to Moderately Active', id: crypto.randomUUID() },
	{ mod: 1.55, label: 'Moderately Active', id: crypto.randomUUID() },
	{ mod: 1.725, label: 'Very Active', id: crypto.randomUUID() },
	{ mod: 1.9, label: 'Extremely Active', id: crypto.randomUUID() },
];
const deficit = [
	{ mod: 0.1, label: '10%', id: crypto.randomUUID() },
	{ mod: 0.15, label: '15%', id: crypto.randomUUID() },
	{ mod: 0.2, label: '20%', id: crypto.randomUUID() },
	{ mod: 1, label: 'Maintenance', id: crypto.randomUUID() },
];

export function Modifiers({ updateModifiers }) {
	return (
		<section id="modifiers" data-step="1" className="form">
			<div className="form__content" onChange={updateModifiers}>
				<FormSelect
					label="Total Daily Energy Expenditure"
					options={tdee}
					id="tdee"
				/>
				<FormSelect label="Deficit Selector" options={deficit} id="deficit" />
			</div>
		</section>
	);
}
