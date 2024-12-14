// 3rd Parties
import React from 'react';
import { createRoot } from 'react-dom/client';

// Components
import App from './js/app';
import Header from './js/ui/Header';
import Footer from './js/ui/Footer';
import { MacroProvider } from './js/Context/MacroContext';
const root = createRoot(document.getElementById('app'));

root.render(
	<React.StrictMode>
		<>
			<Header
				title="A Macro Calculator"
				subtitle="Built with ❤️ and reactjs"
			/>
			<MacroProvider>
				<App />
			</MacroProvider>
			<Footer />
		</>
	</React.StrictMode>
);
