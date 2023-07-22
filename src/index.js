// 3rd Parties
import React from 'react';
import { createRoot } from 'react-dom/client';

// Components
import App from './app';
import Header from './Presentational/Header';
import Footer from './Presentational/Footer';
import { MacroProvider } from './MacroContext';
const root = createRoot(document.getElementById('app'));

root.render(
	<React.StrictMode>
		<>
			<Header title="A Macro Calculator" subtitle="Built with ❤️ and reactjs" />
			<MacroProvider>
				<App />
			</MacroProvider>
			<Footer />
		</>
	</React.StrictMode>,
);
