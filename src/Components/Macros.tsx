import { useMacros } from '@/hooks/useMacros';
import { useState, useEffect } from 'react';
export default function Macros() {
    const {
        macros: { fats, carbs, proteins },
        calorieGoal,
        carbCycle,
    } = useMacros();

    const [macros, setMacros] = useState<Array<{}>>([]);
    useEffect(() => {
        if (carbCycle) {
            setMacros([
                {
                    label: 'Low Carb',
                    macro: fats.lowCarb,
                    id: 'lowCarb',
                },
                {
                    label: 'High Carb',
                    macro: fats.highCarb,
                    id: 'highCarb',
                },
            ]);
        } else {
            setMacros([
                {
                    label: 'Fats',
                    macro: fats,
                    id: 'fats',
                },
                {
                    label: 'Proteins',
                    macro: proteins,
                    id: 'proteins',
                },
                {
                    label: 'Carbs',
                    macro: carbs,
                    id: 'carbs',
                },
            ]);
        }
    }, [carbCycle, fats, proteins, carbs]);
    return (
        <div className='flex flex-wrap gap-3 justify-between items-center'>
            <div className='flex flex-col justify-center items-center text-center'>
                <p className='font-bold'>Total Calories:</p>
                <p>{calorieGoal} calories</p>
            </div>
            {macros.map(({ id, label, macro: macros }) => (
                <div
                    className={
                        'flex flex-col justify-center items-center text-center'
                    }
                    key={id}>
                    <p className='font-bold'>{label}:</p>
                    <p>
                        {macros.grams}g ({macros.percentage}%)
                    </p>
                </div>
            ))}
        </div>
    );
}
