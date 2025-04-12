import { describe, it as test, expect } from 'vitest';
import { calcBMR } from './calcBMR';
import { Person } from '../types/types.person';

const male: Person = {
	heightFt: 5,
	heightIn: 10,
	totalInches: 70,
	age: 30,
	weight: 180,
	gender: 'Male',
};

const female: Person = {
	heightFt: 5,
	heightIn: 4,
	totalInches: 64,
	age: 28,
	weight: 140,
	gender: 'Female',
};
describe('BMR_Calculator', () => {
	test('should calculate BMR for a male correctly', () => {
		const result = calcBMR(male);
		expect(result).toBe(1872);
	});

	test('should calculate BMR for a female correctly', () => {
		const result = calcBMR(female);
		expect(result).toBe(1433);
	});

	test('should throw an error for minors', () => {
		const person: Person = {
			...male,
			age: 15,
		};
		expect(() => calcBMR(person)).toThrowError('Age must be 18 or older');
	});
});
