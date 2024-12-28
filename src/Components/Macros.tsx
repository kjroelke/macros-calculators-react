import { useMacros } from '@/hooks/useMacros';
import { calcCalorieGoal } from '@/lib/Math/calcCalorieGoal';
import {
    calcCarbCycleCarbs,
    calcCarbs,
    calcFats,
    calcProteins,
} from '@/lib/Math/calcMacros';
import MacroDisplay from './MacroDisplay';
import type { Macros } from '@/lib/types/types.macros';

export default function Macros() {
    const {
        tdee,
        modifiers,
        bmr,
        bio: { weight },
        carbCycle,
    } = useMacros();

    const calorieGoal = calcCalorieGoal(tdee, modifiers.deficit, bmr!);
    const fats = calcFats(calorieGoal);
    const proteins = calcProteins(weight, modifiers.protein, calorieGoal);
    let carbs: Macros | { lowCarb: Macros; highCarb: Macros } = calcCarbs(
        calorieGoal,
        fats.calories,
        proteins.calories,
    );
    if (carbCycle) {
        carbs = calcCarbCycleCarbs(carbs.grams, calorieGoal);
    }
    const macros = [
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
    ];

    return (
        <div className='flex flex-wrap gap-3 justify-between items-center'>
            <div className='flex flex-col justify-center items-center text-center'>
                <p className='font-bold'>Total Calories:</p>
                <p>{calorieGoal} calories</p>
            </div>
            {macros.map(({ id, label, macro }) => (
                <MacroDisplay
                    key={id}
                    label={label}
                    macros={macro}
                    id={id}
                />
            ))}
        </div>
    );
}
