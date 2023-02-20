export function FormSelect({ id, options, label }) {
	return (
		<div className={`form__content--${id}`}>
			<label htmlFor={id}>{label}</label>
			<select name={id.toUpperCase()} id={id}>
				{options.map((pair) => {
					return (
						<option value={pair.mod} key={pair.id}>
							{pair.label}
						</option>
					);
				})}
			</select>
		</div>
	);
}
