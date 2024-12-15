import ProteinInput from './Components/ProteinInput';
import Modifiers from './Components/Modifiers';
import BMRCalc from './Components/BMRCalc';
import Output from './Components/Output';

export default function App() {
    return (
        <div className='mx-auto my-0 grid md:grid-cols-2 gap-y-10 gap-x-5'>
            <div className='col-start-2 row-start-1 col-span-full relative'>
                <Output />
            </div>
            <div className='col-start-1 row-start-1 row-span-full flex flex-col gap-5'>
                <BMRCalc />
                <Modifiers />
                <ProteinInput />
            </div>
        </div>
    );
}
