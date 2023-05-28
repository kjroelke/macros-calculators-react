export interface Macros {
	percentage: number;
	grams: number;
	calories: number;
}
export type macroState = {
	fats: Macros;
	proteins: Macros;
	carbs: Macros;
};
export type Person = {
	gender: 'Female' | 'Male';
	weight: number;
	heightFt: number;
	heightIn: number;
	totalInches: number;
	age: number;
};

export type modifiers = {
	activity: number;
	deficit: number;
	protein: number;
};
