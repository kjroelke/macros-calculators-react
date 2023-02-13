import React from 'react';
import { createRoot } from 'react-dom/client';
import { BMRCalculator } from './Presentational/bmrCalculator';
import { MyHeader } from './Presentational/Header';
// import { Modifiers } from './Presentational/modifierCalculator';
import { Proteins } from './Presentational/proteinCalculator';
import { Output } from './Presentational/output';

const root = createRoot(document.getElementById('app'));

class App extends React.Component {
	render() {
		return (
			<div>
				<MyHeader />
				<main>
					<BMRCalculator />

					<Proteins />
					<Output />
				</main>
				<footer id="copyright"></footer>
			</div>
		);
	}
}
root.render(<App />);
// <Modifiers />;
