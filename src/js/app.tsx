import React from "react";
import ProteinInput from "./Components/ProteinInput";
import Modifiers from "./Components/Modifiers";
import BMRCalc from "./Components/BMRCalc";
import Output from "./Components/Output";

export default function App() {
	return (
		<div className="app-container">
			<Output />
			<BMRCalc />
			<Modifiers />
			<ProteinInput />
		</div>
	);
}
