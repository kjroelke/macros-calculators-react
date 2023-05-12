import type { Person } from '../types';
export function calcBMR(person: Person): number {
	if ('Female' === person.gender) {
		return calcFemaleBMR(person);
	} else if ('Male' === person.gender) {
		return calcMaleBMR(person);
	} else throw new Error('Gender is undefined!');
}
function calcFemaleBMR(person: Person) {
	return Math.round(
		655 + 4.35 * person.weight + 4.7 * person.totalInches - 4.7 * person.age,
	);
}
function calcMaleBMR(person: Person) {
	return Math.round(
		66 + 6.23 * person.weight + 12.7 * person.totalInches - 6.8 * person.age,
	);
}
