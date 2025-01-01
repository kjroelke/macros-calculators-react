import BMRCalc from '@/Components/BMRCalc';
import Modifiers from '@/Components/Modifiers';
import Output from '@/Components/Output';
import ProteinInput from '@/Components/ProteinInput';

export default function AppInternals() {
    return (
        <div className='mx-auto my-0 grid md:grid-cols-2 gap-y-10 gap-x-5 md:py-10 md:px-2 max-w-screen-xl'>
            <div className='md:col-start-2 md:row-start-1 md:col-span-full relative'>
                <Output />
            </div>
            <div className='md:col-start-1 md:row-start-1 md:row-span-full flex flex-col gap-5'>
                <BMRCalc />
                <Modifiers />
                <ProteinInput />
            </div>
        </div>
    );
}
