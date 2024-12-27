import { Macros } from '@/lib/types/types.macros';

export default function MacroDisplay({
    label,
    macros,
    id,
}: {
    label: string;
    macros: Macros | { lowCarb: Macros; highCarb: Macros };
    id: string;
}) {
    if ('lowCarb' in macros) {
        const { lowCarb, highCarb } = macros;
        return (
            <>
                <MacroDisplay
                    label='Low Carb'
                    macros={lowCarb}
                    id='lowCarb'
                />
                <MacroDisplay
                    label='High Carb'
                    macros={highCarb}
                    id='highCarb'
                />
            </>
        );
    }
    return (
        <div
            className={'flex flex-col justify-center items-center text-center'}
            key={id}>
            <p className='font-bold'>{label}:</p>
            <p>
                {macros.grams}g ({macros.percentage}%)
            </p>
        </div>
    );
}
