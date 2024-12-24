import { AppState } from '../types/types.app';
import { Macros, macroState } from '../types/types.macros';
import { calcBMR } from './calcBMR';
import { calcCalorieGoal } from './calcCalorieGoal';

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
    private calorieGoal: number | string;

    private lowCarbDays = 5;
    private highCarbDays = 2;

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
            const proteins = this.calcProteins();
            const fats = this.calcFats();
            const carbs = this.calcCarbs();
            return {
                ...this.state,
                bmr: this.bmr,
                tdee: this.tdee,
                calorieGoal: this.calorieGoal as number,
                macros: {
                    proteins,
                    fats,
                    carbs: this.state.carbCycle
                        ? this.calcCarbCycleCarbs(carbs.grams)
                        : carbs,
                },
            };
        } catch (error) {
            this.calorieGoal = error as string;
            return {
                ...this.state,
                calorieGoal: this.calorieGoal,
            };
        }
    }

    private calcProteins(): Macros {
        const {
            bio: person,
            modifiers: { protein: modifier },
        } = this.state;
        const { proteins } = this.state.macros;
        let { grams, calories } = proteins;
        grams = Math.round(person.weight * modifier);
        calories = Math.round(grams * 4);
        const percentage = Math.round((calories / this.calorieGoal) * 100);
        const proteinMacros = {
            percentage: percentage,
            grams: grams,
            calories: calories,
        };
        return proteinMacros;
    }

    private calcFats(): Macros {
        const { fats } = this.state.macros as macroState;
        let { grams, calories } = fats;
        calories = Math.round((30 / 100) * this.calorieGoal);
        grams = Math.round(calories / 9);
        const fatMacros = {
            grams: grams,
            calories: calories,
            percentage: 30,
        };
        return fatMacros;
    }

    private calcCarbs(): Macros {
        const goal = this.state.calorieGoal as number;
        const macros = this.state.macros as macroState;
        const {
            fats: { calories: fCals },
            proteins: { calories: pCals },
        } = macros;
        const cCals = Math.round(goal - fCals - pCals);
        const cGrams = Math.round(cCals / 4);
        const cPercent = Math.round((cCals / goal) * 100);
        const carbMacros = {
            calories: cCals,
            grams: cGrams,
            percentage: cPercent,
        };

        return carbMacros;
    }

    private calcCarbCycleCarbs(grams: number): {
        lowCarb: Macros;
        highCarb: Macros;
    } {
        const totalWeeklyCarbs = grams * 7;
        // Assume low-carb days are 90% of daily carbs
        // and high-carb days are 125% of daily carbs
        const lowCarbGrams = grams * 0.9;
        const lowCarbMacros = {
            grams: lowCarbGrams,
            calories: lowCarbGrams * 4,
            percentage: Math.round(
                ((lowCarbGrams * 4) / this.calorieGoal) * 100,
            ),
        };
        const lowCarbTotal = lowCarbGrams * this.lowCarbDays;
        return {
            lowCarb: lowCarbMacros,
            highCarb: this.calcHighCarbs(lowCarbTotal, totalWeeklyCarbs),
        };
    }

    private calcHighCarbs(
        lowCarbTotal: number,
        totalWeeklyCarbs: number,
    ): Macros {
        const highCarbTotal = totalWeeklyCarbs - lowCarbTotal;
        const highCarbIntake = highCarbTotal / this.highCarbDays;
        return {
            grams: highCarbIntake,
            calories: highCarbIntake * 4,
            percentage: Math.round((highCarbIntake * 4) / this.calorieGoal),
        };
    }
}

export function calcAllMacros(state: AppState): AppState {
    const calculator = new MacroCalculator(state);
    return calculator.calcAllMacros();
}
