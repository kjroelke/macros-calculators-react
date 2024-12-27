import { useContext } from 'react';
import { MacroContext } from '@/Context/MacroContext';

export function useMacros() {
    const context = useContext(MacroContext);
    if (!context)
        throw new Error('Attempting to use context outside of provider!');
    return context;
}
