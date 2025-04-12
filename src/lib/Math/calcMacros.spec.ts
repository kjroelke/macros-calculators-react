import { describe, test, expect } from 'vitest';
import {
	calcFats,
	calcProteins,
	calcCarbs,
	calcCarbCycleCarbs,
} from './calcMacros';

describe('calcMacros', () => {
	const calorieGoal = 1772;
	const weight = 140;
	const proteinModifier = 0.8;
	describe('calcFats', () => {
		test('should calculate fats correctly', () => {
			const newCalories = Math.round((30 / 100) * calorieGoal);
			const result = calcFats(calorieGoal);
			expect(result).toEqual({
				grams: Math.round(newCalories / 9),
				calories: newCalories,
				percentage: 30,
			});
		});
	});

	describe('calcProteins', () => {
		test('should calculate proteins correctly', () => {
			const result = calcProteins(weight, proteinModifier, calorieGoal);
			expect(result).toEqual({
				grams: 112,
				calories: 448,
				percentage: 25,
			});
		});
	});

	describe('calcCarbs', () => {
		test('should calculate carbs correctly', () => {
			const fats = calcFats(calorieGoal);
			const protein = calcProteins(weight, proteinModifier, calorieGoal);
			const result = calcCarbs(
				calorieGoal,
				fats.calories,
				protein.calories,
			);
			expect(result).toEqual({
				grams: 198,
				calories: 792,
				percentage: 45,
			});
		});
	});

	describe.skip('calcCarbCycleCarbs', () => {
		test('should calculate carb cycling macros correctly', () => {
			const grams = 245;
			const result = calcCarbCycleCarbs(grams, calorieGoal);
			expect(result).toEqual({
				lowCarb: {
					grams: 221,
					calories: 884,
					percentage: 44,
				},
				highCarb: {
					grams: 306,
					calories: 1224,
					percentage: 61,
				},
			});
		});
	});
});
