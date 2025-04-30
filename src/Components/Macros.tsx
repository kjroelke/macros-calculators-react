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

    let calorieGoal: number | null = null;
    let error: string | null = null;
    let fats: Macros | null = null;
    let proteins: Macros | null = null;
    let carbs: Macros | { lowCarb: Macros; highCarb: Macros } | null = null;

    try {
        calorieGoal = calcCalorieGoal(tdee, modifiers.deficit, bmr!);
        fats = calcFats(calorieGoal);
        proteins = calcProteins(weight, modifiers.protein, calorieGoal);
        carbs = calcCarbs(calorieGoal, fats.calories, proteins.calories);
        if (carbCycle && carbs) {
            carbs = calcCarbCycleCarbs(carbs.grams, calorieGoal);
        }
    } catch (err) {
        error = err instanceof Error ? err.message : 'An error occurred while calculating your macros.';
    }
    const macros = [
        {
            label: 'Fats',
            macro: fats!,
            id: 'fats',
        },
        {
            label: 'Proteins',
            macro: proteins!,
            id: 'proteins',
        },
        {
            label: 'Carbs',
            macro: carbs!,
            id: 'carbs',
        },
    ].filter((macro) => macro.macro !== null);

    return (
        <div className='flex flex-wrap gap-3 justify-between items-center'>
            <div className='flex flex-col justify-center items-center text-center'>
                <p className='font-bold'>Total Calories:{' '}
                {error ? (
                    <span className='text-red-500'>{error}</span>
                ) : calorieGoal === null ? (
                    <span className='text-gray-500'>Calculating...</span>
                ) : (
                    <span>{calorieGoal} calories</span>
                )}
                </p>
            </div>
            {error ? null : macros.length > 0 ? (
                macros.map(({ id, label, macro }) => (
                    <MacroDisplay
                        key={id}
                        label={label}
                        macros={macro}
                        id={id}
                    />
                ))
            ) : (
                <p className='text-gray-500'>No macros available.</p>
            )}
        </div>
    );
}
