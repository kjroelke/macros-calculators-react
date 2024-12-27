import ClientInfo from './ClientInfo';
import Form from './Form';
import GenderToggle from './GenderToggle';

export default function BMRCalc() {
    return (
        <Form id='bmr-calculator'>
            <h2 className='text-2xl  font-bold'>Client Info</h2>
            <GenderToggle />
            <ClientInfo />
        </Form>
    );
}
