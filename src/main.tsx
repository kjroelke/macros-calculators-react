import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import Header from './ui/Header.tsx';
import Footer from './ui/Footer.tsx';
import { MacroProvider } from './Context/MacroContext.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Header
            title='A Macro Calculator'
            subtitle='Built with Love and React'
        />
        <MacroProvider>
            <App />
        </MacroProvider>
        <Footer />
    </StrictMode>,
);
