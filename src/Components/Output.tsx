import SectionContainer from '../ui/SectionContainer';
import CarbCycledMacros from './MacroDisplay';
import CarbCycleToggle from './CarbCycleToggle';
import Macros from './Macros';
import { useMacros } from '@/hooks/useMacros';

export default function Output() {
    const { bmr, tdee, carbCycle } = useMacros();
    return (
        <SectionContainer
            className='sticky top-1 bg-white text-primary flex flex-col sm:justify-around items-stretch gap-3 drop-shadow-lg'
            id='output'>
            <h2 className='font-bold text-3xl text-primary'>
                Macros Breakdown
            </h2>
            <div className='flex justify-between'>
                <div className='flex flex-col gap-y-1'>
                    <p>
                        BMR: <strong>{bmr} calories</strong>
                    </p>
                    <p>
                        TDEE: <strong>{tdee} calories</strong>
                    </p>
                </div>
                <CarbCycleToggle />
            </div>
            <Macros />
        </SectionContainer>
    );
}
