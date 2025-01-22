import { Label } from '@/Components/ui/label';
import { modifierLabel } from '../lib/types/types.app';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/Components/ui/select';
import { useMacros } from '@/hooks/useMacros';

export default function FormSelect({
    id,
    options,
    label,
}: {
    id: string;
    options: modifierLabel[];
    label: string | false;
}) {
    const { dispatch, modifiers } = useMacros();
    return (
        <div className={`form__content--${id} flex flex-col gap-y-3`}>
            {label && (
                <Label
                    className='font-bold'
                    htmlFor={id}>
                    {label}
                </Label>
            )}
            <Select
                value={options[modifiers[id]]}
                onValueChange={(ev) => {
                    dispatch({
                        type: 'updateModifiers',
                        payload: { name: id, value: ev },
                    });
                }}>
                <SelectTrigger className='border-2 border-primary rounded-md p-1'>
                    <SelectValue placeholder={label} />
                </SelectTrigger>
                <SelectContent className='border-primary bg-secondary  dark:border-primary-light dark:bg-primary dark:text-secondary-light'>
                    {options.map((pair) => {
                        return (
                            <SelectItem
                                className='bg:white'
                                value={`${pair.mod}`}
                                key={pair.label}>
                                {pair.label}
                            </SelectItem>
                        );
                    })}
                </SelectContent>
            </Select>
        </div>
    );
}
