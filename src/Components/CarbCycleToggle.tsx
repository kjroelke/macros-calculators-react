import { Switch } from '@/Components/ui/switch';
import { useMacros } from '@/hooks/useMacros';

export default function CarbCycleToggle() {
    const { dispatch, carbCycle } = useMacros();
    return (
        <div className='flex justify-between items-center gap-2'>
            <p className='font-bold text-primary text-lg'>Carb Cycling</p>
            <div className='flex items-center gap-2'>
                <label htmlFor='carbCycle'>Off</label>
                <Switch
                    id='carbCycle'
                    checked={carbCycle}
                    onCheckedChange={(checked) => {
                        dispatch({ type: 'carbCycle', payload: checked });
                    }}
                />
                <label htmlFor='carbCycle'>On</label>
            </div>
        </div>
    );
}
