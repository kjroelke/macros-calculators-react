import { useMacros } from '@/hooks/useMacros';
import StyledInput from '../ui/StyledInput';

export default function ClientInfo() {
    const { bio, dispatch } = useMacros();
    const { age, weight, heightFt, heightIn } = bio;
    function handleChange(ev) {
        dispatch({ type: 'bio/personInfo', payload: ev });
    }

    return (
        <div
            id='body'
            className='flex flex-col gap-y-3 grow shrink basis-auto'>
            <div className='flex gap-2 items-center flex-wrap'>
                <div>
                    <StyledInput
                        label='Age'
                        id='age'
                        value={age}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <StyledInput
                        label='Weight'
                        id='weight'
                        value={weight}
                        onChange={handleChange}
                        step='0.1'
                        type='number'
                    />
                </div>
            </div>
            <div
                id='height'
                className='flex flex-col'>
                <h4 className='text-md font-bold text-primary'>Height</h4>
                <div className='flex gap-2 items-center w-full'>
                    <div className='flex gap-1 items-center'>
                        <StyledInput
                            label='Ft'
                            id='heightFt'
                            value={heightFt}
                            onChange={handleChange}
                            className='grow shrink basis-auto'
                        />
                    </div>
                    <div className='flex gap-1 items-center'>
                        <StyledInput
                            label='In'
                            id='heightIn'
                            value={heightIn}
                            onChange={handleChange}
                            className='grow shrink basis-auto'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
