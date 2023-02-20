import React from 'react';
import { createRoot } from 'react-dom/client';
import { BMRCalc } from './Presentational/bmrCalculator';
import { MyHeader } from './Presentational/Header';
// import { Modifiers } from './Presentational/modifierCalculator';
import { Proteins } from './Presentational/proteinCalculator';
import { Output } from './Presentational/output';

const root = createRoot(document.getElementById('app'));

class App extends React.Component {
	state = {
		bio: {
			gender: 'Female',
			weight: 160,
			height: 60,
			age: 29,
		},
		macros: {
			fats: {
				percentage: 30,
				grams: 0,
				calories: 0,
			},
			proteins: {
				percentage: 30,
				grams: 0,
				calories: 0,
			},
			carbs: {
				percentage: 0,
				grams: 0,
				calories: 0,
			},
		},
	};
	render() {
		return (
			<div>
				<MyHeader
					title="A Fool-Proof Macro Calculator"
					subtitle="Eventually!"
				/>
				<main>
					<BMRCalc title="Step 1: Person Info!" personInfo={this.state.bio} />
				</main>
				<footer id="copyright"></footer>
			</div>
		);
	}
}
root.render(<App />);
// <Modifiers />;
