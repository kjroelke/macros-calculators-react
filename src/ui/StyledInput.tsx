import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { cn } from '@/lib/utils';

export default function StyledInput({
    id,
    label,
    className,
    ...props
}: {
    id: string;
    label: string | false;
    className?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
}) {
    return (
        <>
            {label && (
                <Label
                    htmlFor={id}
                    className='font-bold'>
                    {label}
                </Label>
            )}
            <Input
                className={cn(
                    'border-2',
                    'border-primary',
                    'dark:border-secondary-light',
                    'rounded-md',
                    'p-1',
                    className,
                )}
                id={id}
                name={id}
                {...props}
            />
        </>
    );
}
