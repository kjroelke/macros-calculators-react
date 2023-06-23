export type AppState = {
	bio: {
		gender: 'Female' | 'Male';
		weight: number;
		heightFt: number;
		heightIn: number;
		totalInches: number;
		age: number;
	};
};

export type reducerAction = {
	type: string;
	payload: any;
};
