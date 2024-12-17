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

export type modifiers = {
	activity: number;
	deficit: number;
	protein: number;
};
