import { Fragment } from 'react';
import Header from './ui/Header.tsx';
import Footer from './ui/Footer.tsx';
import { MacroProvider } from './Context/MacroContext.tsx';
import { loadStateFromLocalStorage } from './lib/utils/localStorage';
import { initialState as defaultState } from './Context/initialState.ts';
import BMRCalc from './Components/BMRCalc.tsx';
import Modifiers from './Components/Modifiers.tsx';
import ProteinInput from './Components/ProteinInput.tsx';
import Output from './Components/Output.tsx';

const initialState = loadStateFromLocalStorage() || defaultState;
export default function App() {
	return (
		<Fragment>
			<Header
				title='A Macro Calculator'
				subtitle='Built with Love and React'
			/>
			<div className='mx-3 lg:mx-auto my-4 grid md:grid-cols-2 md:flex-row-reverse gap-y-10 gap-x-5 md:py-10 md:px-2 max-w-screen-xl'>
				<MacroProvider initialState={initialState}>
					<div className='md:col-start-1 md:row-start-1 md:row-span-full flex flex-col gap-5'>
						<BMRCalc />
						<Modifiers />
						<ProteinInput />
					</div>
					<div className='md:col-start-2 md:row-start-1 md:col-span-full relative'>
						<Output />
					</div>
				</MacroProvider>
			</div>
			<Footer />
		</Fragment>
	);
}
