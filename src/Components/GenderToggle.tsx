import { useMacros } from '@/hooks/useMacros';
import { Switch } from './ui/switch';

export default function GenderToggle() {
    const {
        bio: { gender },
        dispatch,
    } = useMacros();
    return (
        <div className='flex gap-2 items-center'>
            <span className='font-bold text-primary'>Male</span>
            <Switch
                className='data-[state=checked]:bg-primary-light data-[state=unchecked]:bg-secondary-light dark:data-[state=checked]:bg-secondary-light dark:data-[state=unchecked]:bg-primary-light'
                checked={'Female' === gender}
                onCheckedChange={(checked) =>
                    dispatch({
                        type: 'bio/gender',
                        payload: checked ? 'Female' : 'Male',
                    })
                }
            />
            <span className='font-bold text-primary'>Female</span>
        </div>
    );
}
