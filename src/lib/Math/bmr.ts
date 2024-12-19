import { Person } from '../types/types.person';

class BMR_Calculator {
    /** Height in inches */
    private totalInches: number;
    private age: number;
    private weight: number;
    bmr: number;

    constructor(person: Person) {
        this.totalInches = person.heightFt * 12 + person.heightIn;
        this.age = person.age;
        this.weight = person.weight;
        this.bmr = this.getBMR(person.gender);
    }

    private calcFemaleBMR(): number {
        return Math.round(
            655 + 4.35 * this.weight + 4.7 * this.totalInches - 4.7 * this.age,
        );
    }

    private calcMaleBMR(): number {
        return Math.round(
            66 + 6.23 * this.weight + 12.7 * this.totalInches - 6.8 * this.age,
        );
    }

    private getBMR(gender: 'Male' | 'Female'): number {
        const bmr = {
            Female: this.calcFemaleBMR(),
            Male: this.calcMaleBMR(),
        };
        return bmr[gender];
    }
}

/** Returns BMR as Number */
export function calcBMR(person: Person): number {
    const calc = new BMR_Calculator(person);
    return calc.bmr;
}
