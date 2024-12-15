import { useMacros } from '../Context/MacroContext';
import InputNumber from '../ui/InputNumber';

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
            <h3 className='text-lg text-primary font-bold'>Client Info</h3>
            <InputNumber
                label='Weight (in pounds)'
                id='weight'
                value={weight}
                decimal={true}
                handleChange={handleChange}
            />
            <div
                id='height'
                className='flex flex-col gap-y-3'>
                <h4 className='text-md font-bold text-primary'>Height</h4>
                <InputNumber
                    label='Ft'
                    id='heightFt'
                    value={heightFt}
                    handleChange={handleChange}
                />
                <InputNumber
                    label='In'
                    id='heightIn'
                    value={heightIn}
                    handleChange={handleChange}
                />
            </div>
            <InputNumber
                label='Age'
                id='age'
                value={age}
                handleChange={handleChange}
            />
        </div>
    );
}
