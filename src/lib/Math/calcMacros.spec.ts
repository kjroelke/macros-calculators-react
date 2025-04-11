import { describe, test, expect } from 'vitest';
import {
	calcFats,
	calcProteins,
	calcCarbs,
	calcCarbCycleCarbs,
} from './calcMacros';

describe('calcMacros', () => {
	describe('calcFats', () => {
		test('should calculate fats correctly', () => {
			const calorieGoal = 2000;
			const result = calcFats(calorieGoal);
			expect(result).toEqual({
				grams: 67,
				calories: 600,
				percentage: 30,
			});
		});
	});

	describe('calcProteins', () => {
		test('should calculate proteins correctly', () => {
			const weight = 70;
			const modifier = 1.5;
			const calorieGoal = 2000;
			const result = calcProteins(weight, modifier, calorieGoal);
			expect(result).toEqual({
				grams: 105,
				calories: 420,
				percentage: 21,
			});
		});
	});

	describe('calcCarbs', () => {
		test('should calculate carbs correctly', () => {
			const calorieGoal = 2000;
			const fatCals = 600;
			const proteinCals = 420;
			const result = calcCarbs(calorieGoal, fatCals, proteinCals);
			expect(result).toEqual({
				grams: 245,
				calories: 980,
				percentage: 49,
			});
		});
	});

	describe.skip('calcCarbCycleCarbs', () => {
		test('should calculate carb cycling macros correctly', () => {
			const grams = 245;
			const calorieGoal = 2000;
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
