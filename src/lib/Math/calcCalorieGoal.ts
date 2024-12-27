/**
 * Calculates Calorie Goal
 *
 * @param tdee Total Daily Energy Expenditure
 * @param deficit  Percentage of calories to cut
 * @param bmr Basal Metabolic Rate
 * @returns Calorie Goal
 * @throws Error if calories are too low
 */
export function calcCalorieGoal(
    tdee: number,
    deficit: number,
    bmr: number,
): number {
    let calories: number = 0;
    const isCut = 1.0 > deficit;
    const isMaintenance = 1.0 === deficit;
    const isBulk = 1.0 < deficit;
    if (isCut) {
        calories = Math.round(tdee - tdee * deficit);
        if (calories < bmr) {
            throw new Error('Too low!');
        }
    } else if (isMaintenance) {
        calories = tdee;
    } else if (isBulk) {
        calories = Math.round(tdee * deficit);
    }
    return calories;
}
