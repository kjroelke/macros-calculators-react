import { useMacros } from '../Context/MacroContext';

export default function Macros() {
    const {
        macros: { fats, carbs, proteins },
    } = useMacros();
    const macros = [
        {
            label: 'Protein',
            macro: proteins,
            id: 'proteins',
        },
        {
            label: 'Fat',
            macro: fats,
            id: 'fats',
        },
        {
            label: 'Carbs',
            macro: carbs,
            id: 'carbs',
        },
    ];
    return (
        <div className='percents flex flex-wrap gap-3 justify-between items-center'>
            {macros.map(({ id, label, macro: macros }) => (
                <div
                    className={`percent__${id}`}
                    key={id}>
                    <p>
                        <strong>{label}:</strong>
                        <br />
                        <span>
                            {macros.grams}g ({macros.percentage}%)
                        </span>
                    </p>
                </div>
            ))}
        </div>
    );
}
