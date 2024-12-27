import ClientInfo from './ClientInfo';
import Container from './Container';
import GenderToggle from './GenderToggle';

export default function BMRCalc() {
    return (
        <Container
            id='bmr-calculator'
            cardTitle='Client Info'>
            <GenderToggle />
            <ClientInfo />
        </Container>
    );
}
