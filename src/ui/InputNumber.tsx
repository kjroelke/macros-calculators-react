import { Input } from '@/components/ui/input';

export default function InputNumber({
    handleChange,
    id,
    value,
    label,
    decimal,
}: {
    handleChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
    id: string;
    value: number;
    label: string | false;
    decimal?: boolean;
}) {
    return (
        <>
            {label && (
                <label
                    htmlFor={id}
                    className='font-bold text-primary'>
                    {label}
                </label>
            )}

            <Input
                className='border-2 border-primary rounded-md p-1'
                onChange={handleChange}
                type='number'
                inputMode={decimal ? 'decimal' : 'numeric'}
                step={decimal ? '0.1' : '1'}
                id={id}
                name={id}
                value={value}
            />
        </>
    );
}
