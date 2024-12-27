import { Person } from '../types/types.person';

/** Returns BMR as Number */
export function calcBMR(person: Person): number {
    const calc = new BMR_Calculator(person);
    return calc.bmr;
}

class BMR_Calculator {
    /** Height in inches */
    private totalInches: number;
    private age: number;
    private weight: number;
    bmr: number;

    constructor({
        heightFt,
        heightIn,
        age,
        weight,
        gender,
    }: {
        heightFt: Person['heightFt'];
        heightIn: Person['heightIn'];
        age: Person['age'];
        weight: Person['weight'];
        gender: Person['gender'];
    }) {
        this.totalInches = heightFt * 12 + heightIn;
        this.age = age;
        this.weight = weight;
        this.bmr = this.getBMR(gender);
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
