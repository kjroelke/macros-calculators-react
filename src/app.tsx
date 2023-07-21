// 3rd Parties
import React from 'react';

// Components
import ClientInfo from './Components/ClientInfo';
import Calories from './Components/Calories';

// Presentational Components
import PersonInfo from './Presentational/PersonInfo';
import Output from './Presentational/Output';
import Macros from './Presentational/Macros';
import ProteinInput from './Presentational/ProteinInput';
import Modifiers from './Presentational/Modifiers';
import BMRCalc from './Presentational/BMRCalc';
import Button from './Components/Buttons/Button';
import { useMacros } from './MacroContext';

export default function App() {
	const {
		bio: { gender },
	} = useMacros();

	return (
		<main>
			<Output>
				<PersonInfo />
				<Calories />
				<Macros />
				<Button dispatchType="reset" id="reset">
					Reset
				</Button>
			</Output>
			<BMRCalc>
				<div className="form__content--gender">
					<p>
						Current Gender: <span className="current-gender">{gender}</span>
					</p>
					<Button dispatchType="bio/gender">Toggle Gender</Button>
				</div>
				<ClientInfo />
			</BMRCalc>
			<Modifiers />
			<ProteinInput />
		</main>
	);
}
