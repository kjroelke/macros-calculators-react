import { AppState } from '../types/types.app';
import { Macros } from '../types/types.macros';
import { calcBMR } from './calcBMR';
import { calcCalorieGoal } from './calcCalorieGoal';

export function calcAllMacros(state: AppState): AppState {
    const calculator = new MacroCalculator(state);
    return calculator.calcAllMacros();
}

export function calcFats(calorieGoal: number): Macros {
    const newCalories = Math.round((30 / 100) * calorieGoal);
    return {
        grams: Math.round(newCalories / 9),
        calories: newCalories,
        percentage: 30,
    };
}

export function calcProteins(
    weight: number,
    modifier: number,
    calorieGoal: number,
): Macros {
    const grams = Math.round(weight * modifier);
    const calories = Math.round(grams * 4);
    const percentage = Math.round((calories / calorieGoal) * 100);
    return {
        percentage,
        grams,
        calories,
    };
}

export function calcCarbs(
    calorieGoal: number,
    fatCals: number,
    proteinCals: number,
): Macros {
    const calories = Math.round(calorieGoal - fatCals - proteinCals);
    const grams = Math.round(calories / 4);
    const percentage = Math.round((calories / calorieGoal) * 100);
    return {
        calories: calories,
        grams,
        percentage,
    };
}

export function calcCarbCycleCarbs(
    grams: number,
    calorieGoal: number,
): {
    lowCarb: Macros;
    highCarb: Macros;
} {
    const totalWeeklyCarbs = grams * 7;
    // Assume low-carb days are 90% of daily carbs
    // and high-carb days are 125% of daily carbs
    const lowCarbDays = 5;
    const lowCarbGrams = Math.round(grams * 0.9);
    const lowCarbMacros = {
        grams: lowCarbGrams,
        calories: lowCarbGrams * 4,
        percentage: Math.round(((lowCarbGrams * 4) / calorieGoal) * 100),
    };
    const lowCarbTotal = lowCarbGrams * lowCarbDays;
    return {
        lowCarb: lowCarbMacros,
        highCarb: calcHighCarbs(lowCarbTotal, totalWeeklyCarbs, calorieGoal),
    };
}

function calcHighCarbs(
    lowCarbTotal: number,
    totalWeeklyCarbs: number,
    calorieGoal: number,
): Macros {
    const highCarbTotal = totalWeeklyCarbs - lowCarbTotal;
    const highCarbDays = 2;
    const highCarbIntake = highCarbTotal / highCarbDays;

    return {
        grams: highCarbIntake,
        calories: highCarbIntake * 4,
        percentage: Math.round(((highCarbIntake * 4) / calorieGoal) * 100),
    };
}

class MacroCalculator {
    /** The Passed state */
    private state: AppState;
    /**
     * The calculated BMR
     */
    private bmr: number;

    /**
     * The calculated TDEE
     */
    private tdee: number;

    /**
     * The calculated Calorie Goal
     */
    private calorieGoal: number;

    // private lowCarbDays = 5;
    // private highCarbDays = 2;

    constructor(state: AppState) {
        this.state = state;
        this.bmr = calcBMR(state.bio);
        this.tdee = Math.round(this.bmr * state.modifiers.activity);
        this.calorieGoal = 0;
    }

    calcAllMacros(): AppState {
        try {
            this.calorieGoal = calcCalorieGoal(
                this.tdee,
                this.state.modifiers.deficit,
                this.bmr,
            );
            return {
                ...this.state,
                bmr: this.bmr,
                tdee: this.tdee,
                calorieGoal: this.calorieGoal as number,
            };
        } catch (error) {
            console.error(error);
            return this.state;
        }
    }

    // private calcProteins(): Macros {
    //     const {
    //         bio: { weight },
    //         modifiers: { protein: modifier },
    //     } = this.state;
    //     const grams = Math.round(weight * modifier);
    //     const calories = Math.round(grams * 4);
    //     const percentage = Math.round((calories / this.calorieGoal) * 100);
    //     return {
    //         percentage,
    //         grams,
    //         calories,
    //     };
    // }

    // private calcFats(): Macros {
    //     const newCalories = Math.round((30 / 100) * this.calorieGoal);
    //     const fatMacros = {
    //         grams: Math.round(newCalories / 9),
    //         calories: newCalories,
    //         percentage: 30,
    //     };
    //     return fatMacros;
    // }

    // private calcCarbs(): Macros {
    //     const goal = this.state.calorieGoal as number;
    //     const {
    //         macros: {
    //             fats: { calories: fatCals },
    //             proteins: { calories: proteinCals },
    //         },
    //     } = this.state;
    //     const calories = Math.round(goal - fatCals - proteinCals);
    //     const grams = Math.round(calories / 4);
    //     const percentage = Math.round((calories / goal) * 100);
    //     return {
    //         calories: calories,
    //         grams,
    //         percentage,
    //     };
    // }

    // private calcCarbCycleCarbs(grams: number): {
    //     lowCarb: Macros;
    //     highCarb: Macros;
    // } {
    //     const totalWeeklyCarbs = grams * 7;
    //     // Assume low-carb days are 90% of daily carbs
    //     // and high-carb days are 125% of daily carbs
    //     const lowCarbGrams = grams * 0.9;
    //     const lowCarbMacros = {
    //         grams: lowCarbGrams,
    //         calories: lowCarbGrams * 4,
    //         percentage: Math.round(
    //             ((lowCarbGrams * 4) / this.calorieGoal) * 100,
    //         ),
    //     };
    //     const lowCarbTotal = lowCarbGrams * this.lowCarbDays;
    //     return {
    //         lowCarb: lowCarbMacros,
    //         highCarb: this.calcHighCarbs(lowCarbTotal, totalWeeklyCarbs),
    //     };
    // }

    // private calcHighCarbs(
    //     lowCarbTotal: number,
    //     totalWeeklyCarbs: number,
    // ): Macros {
    //     const highCarbTotal = totalWeeklyCarbs - lowCarbTotal;
    //     const highCarbIntake = highCarbTotal / this.highCarbDays;
    //     return {
    //         grams: highCarbIntake,
    //         calories: highCarbIntake * 4,
    //         percentage: Math.round((highCarbIntake * 4) / this.calorieGoal),
    //     };
    // }
}
