import CarbCycleToggle from './CarbCycleToggle';
import Container from './Container';
import Macros from './Macros';
import { useMacros } from '@/hooks/useMacros';

export default function Output() {
    const { bmr, tdee } = useMacros();
    return (
        <Container
            id='output'
            cardTitle='Macros Breakdown'
            className='sticky top-3 text-primary flex flex-col sm:justify-around items-stretch gap-3 drop-shadow-lg'>
            <div className='flex flex-col gap-y-4'>
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
            </div>
        </Container>
    );
}
