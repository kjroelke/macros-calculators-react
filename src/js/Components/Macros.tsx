import React from "react";
import { useMacros } from "../Context/MacroContext";

function Macros() {
	const {
		macros: { fats, carbs, proteins },
	} = useMacros();
	const macros = [
		{
			label: "Protein",
			macro: proteins,
			id: "proteins",
		},
		{
			label: "Fat",
			macro: fats,
			id: "fats",
		},
		{
			label: "Carbs",
			macro: carbs,
			id: "carbs",
		},
	];
	return (
		<div className="percents">
			{macros.map((macro) => (
				<div className={`percent__${macro.id}`}>
					<p>
						<strong>{macro.label}:</strong>
						<br />
						<span>
							{macro.macro.grams}g ({macro.macro.percentage}%)
						</span>
					</p>
				</div>
			))}
		</div>
	);
}

export default Macros;
