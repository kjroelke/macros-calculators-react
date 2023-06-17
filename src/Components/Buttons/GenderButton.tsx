import { useMacros } from '../../MacroContext';

export default function GenderButton({ initalGender }) {
	const x = useMacros();
	console.log(x);
	return (
		<div className="form__content--gender">
			<p>
				Current Gender: <span className="current-gender">{initalGender}</span>
			</p>
			<button
				onClick={(ev) => {
					ev.preventDefault();
					dispatch({ type: 'bio/gender' });
				}}>
				Toggle Gender{' '}
			</button>
		</div>
	);
}
