// 3rd Parties
import React, { useEffect } from 'react';

// Components
import GenderButton from './Components/Buttons/GenderButton';
import ClientInfo from './Components/ClientInfo';
import Calories from './Components/Calories';

// Presentational Components
import PersonInfo from './Presentational/PersonInfo';
import Output from './Presentational/Output';
import Macros from './Presentational/Macros';
import ProteinInput from './Presentational/ProteinInput';
import Modifiers from './Presentational/Modifiers';
import BMRCalc from './Presentational/BMRCalc';
import ResetButton from './Components/Buttons/ResetButton';

export default function App() {
	return (
		<main>
			<Output>
				<PersonInfo />
				<Calories />
				<Macros />
				<ResetButton />
			</Output>
			<BMRCalc>
				<GenderButton />
				<ClientInfo />
			</BMRCalc>
			<Modifiers />
			<ProteinInput />
		</main>
	);
}
