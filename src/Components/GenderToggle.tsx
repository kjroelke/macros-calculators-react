import { useMacros } from '@/hooks/useMacros';
import { Switch } from './ui/switch';

export default function GenderToggle() {
    const {
        bio: { gender },
        dispatch,
    } = useMacros();
    return (
        <div className='flex gap-2 items-center'>
            <span className='font-bold'>Male</span>
            <Switch
                checked={'Female' === gender}
                onCheckedChange={(checked) =>
                    dispatch({
                        type: 'bio/gender',
                        payload: checked ? 'Female' : 'Male',
                    })
                }
            />
            <span className='font-bold'>Female</span>
        </div>
    );
}
