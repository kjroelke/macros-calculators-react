import { activity, deficit } from '@/lib/constants';
import FormSelect from '../ui/FormSelect';
import Container from './Container';

export default function Modifiers() {
	return (
		<Container
			id='modifiers'
			cardTitle='Modifiers'>
			<div className='flex flex-col gap-y-5'>
				<FormSelect
					label='Activity Modifier'
					options={activity}
					id='activity'
				/>
				<FormSelect
					label='Deficit Selector'
					options={deficit}
					id='deficit'
				/>
			</div>
		</Container>
	);
}
