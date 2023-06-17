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

// Utilites
import { useMacros } from './MacroContext';

export default function App() {
	const { dispatch } = useMacros();
	useEffect(() => {
		dispatch({ type: 'calcMacros' });
	}, [dispatch]);

	return (
		<main>
			<Output>
				<PersonInfo />
				<Calories />
				<Macros />
				<button
					id="reset"
					onClick={(ev) => {
						ev.preventDefault();
						console.log('hello');
						dispatch({ type: 'reset' });
					}}>
					Reset
				</button>
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
