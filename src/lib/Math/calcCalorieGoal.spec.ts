import { describe, test, expect, beforeEach } from 'vitest';
import { calcCalorieGoal } from './calcCalorieGoal';

describe('calcCalorieGoal', () => {
	let tdee: number;
	let deficit: number;
	let bmr: number;

	beforeEach(() => {
		tdee = 2500;
		deficit = 1.0;
		bmr = 1500;
	});

	test('should calculate calorie goal for 20% cut correctly', () => {
		deficit = 0.2;
		const result = calcCalorieGoal(tdee, deficit, bmr);
		expect(result).toBe(2000);
	});
	test('should calculate calorie goal for 15% cut correctly', () => {
		deficit = 0.15;
		const result = calcCalorieGoal(tdee, deficit, bmr);
		expect(result).toBe(2125);
	});
	test('should calculate calorie goal for 10% cut correctly', () => {
		deficit = 0.1;
		const result = calcCalorieGoal(tdee, deficit, bmr);
		expect(result).toBe(2250);
	});

	test('should calculate calorie goal for maintenance correctly', () => {
		const result = calcCalorieGoal(tdee, deficit, bmr);
		expect(result).toBe(2500); // Maintenance calories = TDEE
	});

	test('should throw an error if calculated calories are too low', () => {
		tdee = 2044;
		bmr = 1703;
		deficit = 0.2;
		expect(() => calcCalorieGoal(tdee, deficit, bmr)).toThrowError(
			'Too low!',
		);
	});
});
