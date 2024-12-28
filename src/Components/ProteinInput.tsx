import { useMacros } from '@/hooks/useMacros';
import Form from './Form';
import StyledInput from '../ui/StyledInput';
import { ChangeEvent } from 'react';
import Container from './Container';

const proteinRange = {
    Female: '0.6 – 1.0',
    Male: '0.8 – 1.2',
};
export default function MacroForm() {
    const {
        bio: { gender },
        modifiers: { protein: modifier },
        dispatch,
    } = useMacros();
    return (
        <Container
            id='protein'
            cardTitle='Protein Modifier'
            cardDescription='(grams per lb.)'>
            <div>
                <h2 className='font-bold text-2xl'>Protein Modifier</h2>
                <p className='italic text-base'>(grams per lb.)</p>
            </div>
            <span>
                Recommended range for {gender.toLowerCase()}s is{' '}
                {proteinRange[gender as 'Male' | 'Female']}
            </span>
            <StyledInput
                label={false}
                id='protein'
                value={modifier}
                onChange={(ev: ChangeEvent) => {
                    dispatch({ type: 'updateModifiers', payload: ev });
                }}
                step='0.1'
                type='number'
            />
        </Container>
    );
}
