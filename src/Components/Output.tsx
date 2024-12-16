import SectionContainer from '../ui/SectionContainer';
import PersonInfo from '../ui/PersonInfo';
import Calories from './Calories';
import Macros from './Macros';
import { Button } from './ui/button';
import { useMacros } from '@/Context/MacroContext';

export default function Output() {
    const { dispatch } = useMacros();
    return (
        <SectionContainer
            className='sticky top-1 bg-white text-primary flex flex-col sm:justify-around items-stretch gap-3 drop-shadow-lg'
            id='output'>
            <h2 className='font-bold text-3xl text-primary'>
                Macros Breakdown
            </h2>
            <PersonInfo />
            <Calories />
            <Macros />
            <Button
                onClick={(ev) => {
                    ev.preventDefault();
                    dispatch({ type: 'reset' });
                }}
                className='text-white bg-brick px-5 py-2 text-sm cursor-pointer border-brick border-4 overflow-hidden rounded-lg hover:bg-transparent hover:text-brick transition-colors ease-in-out'
                id='reset'>
                Reset
            </Button>
        </SectionContainer>
    );
}
