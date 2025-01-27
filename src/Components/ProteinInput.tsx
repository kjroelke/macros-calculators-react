import { useMacros } from '@/hooks/useMacros';
import StyledInput from '../ui/StyledInput';
import { ChangeEvent, useState } from 'react';
import Container from './Container';
import { Slider } from './ui/slider';
import { Switch } from './ui/switch';

const proteinRange = {
    Female: { low: 0.6, high: 1.0 },
    Male: { low: 0.8, high: 1.2 },
};
export default function MacroForm() {
    const [custom, setCustom] = useState(false);
    const {
        bio: { gender },
        modifiers: { protein: modifier },
        dispatch,
    } = useMacros();
    const protein = [modifier * 10];

    return (
        <Container
            id='protein'
            cardTitle='Protein Modifier'
            cardDescription='(grams per lb.)'>
            <span>
                Recommended range for {gender.toLowerCase()}s is{' '}
                {proteinRange[gender].low} &ndash; {proteinRange[gender].high}{' '}
                grams per lb.
            </span>
            <div className='my-4 flex items-center gap-2'>
                <label
                    htmlFor='useCustom'
                    className='font-bold'>
                    Use Custom Value
                </label>
                <Switch
                    id='useCustom'
                    checked={custom}
                    onCheckedChange={() => setCustom(!custom)}
                />
            </div>
            {!custom ? (
                <div className='flex items-center gap-2'>
                    <Slider
                        id='protein-slider'
                        aria-labelledby='proteinLabel'
                        value={protein}
                        onValueChange={(value) => {
                            dispatch({
                                type: 'updateModifiers',
                                payload: {
                                    name: 'protein',
                                    value: value[0] / 10,
                                },
                            });
                        }}
                        min={proteinRange[gender].low * 10}
                        max={proteinRange[gender].high * 10}
                        step={1}
                        minStepsBetweenThumbs={1}
                    />{' '}
                    <span
                        className='font-bold'
                        id='proteinLabel'>
                        {modifier}
                    </span>
                </div>
            ) : (
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
            )}
        </Container>
    );
}
