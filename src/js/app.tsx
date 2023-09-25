import React from 'react';
import ProteinInput from './Components/ProteinInput';
import Modifiers from './Components/Modifiers';
import Output from './Components/Output';
import ClientInfo from './Components/ClientInfo';
import SectionContainer from './ui/SectionContainer';

export default function App() {
	return (
		<div className="app-container">
			<Output />
			<SectionContainer id="bmr-calculator" className="form">
				<ClientInfo />
			</SectionContainer>
			<SectionContainer id="modifiers" className="form">
				<Modifiers />
			</SectionContainer>
			<SectionContainer id="protein-calculator" className="form">
				<ProteinInput />
			</SectionContainer>
		</div>
	);
}
