import React from 'react';
import ProteinInput from './Components/ProteinInput';
import Modifiers from './Components/Modifiers';
import BMRCalc from './Components/BMRCalc';
import Output from './Components/Output';

export default function App() {
	return (
		<div className="max-w-3xl mx-auto my-0 flex flex-col gap-y-10">
			<Output />
			<BMRCalc />
			<Modifiers />
			<ProteinInput />
		</div>
	);
}
