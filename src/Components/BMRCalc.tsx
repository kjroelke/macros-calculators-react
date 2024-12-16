import ClientInfo from './ClientInfo';

import { useMacros } from '../Context/MacroContext';
import Form from './Form';
import { Switch } from './ui/switch';

export default function BMRCalc() {
    const {
        bio: { gender },
        dispatch,
    } = useMacros();

    return (
        <Form id='bmr-calculator'>
            <div className='form__content--gender'>
                <p>
                    Current Gender:{' '}
                    <span className='current-gender font-bold'>{gender}</span>
                </p>
                <Switch
                    checked={'Female' === gender}
                    onCheckedChange={(checked) =>
                        dispatch({
                            type: 'bio/gender',
                            payload: checked ? 'Female' : 'Male',
                        })
                    }
                />
            </div>
            <ClientInfo />
        </Form>
    );
}
