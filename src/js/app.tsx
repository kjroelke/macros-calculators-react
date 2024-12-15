import React from 'react';
import ProteinInput from './Components/ProteinInput';
import Modifiers from './Components/Modifiers';
import BMRCalc from './Components/BMRCalc';
import Output from './Components/Output';

export default function App() {
	return (
		<div className="mx-auto my-0 grid md:grid-cols-2 gap-y-10">
			<Output />
			<BMRCalc />
			<Modifiers />
			<ProteinInput />
		</div>
	);
}
