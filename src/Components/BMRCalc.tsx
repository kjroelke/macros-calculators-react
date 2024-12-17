import ClientInfo from './ClientInfo';
import Form from './Form';
import GenderToggle from './GenderToggle';

export default function BMRCalc() {
    return (
        <Form id='bmr-calculator'>
            <GenderToggle />
            <ClientInfo />
        </Form>
    );
}
