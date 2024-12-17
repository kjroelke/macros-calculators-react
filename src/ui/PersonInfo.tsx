import { useMacros } from '../Context/MacroContext';

function PersonInfo() {
    const {
        bio: { gender, weight, age, heightFt, heightIn, totalInches },
    } = useMacros();

    const height =
        heightFt % 12 === 0
            ? `${heightFt} ft (${totalInches} inches)`
            : `${heightFt} ft, ${heightIn} in (${totalInches} inches)`;
    return (
        <div className='personInfo w-full'>
            <p>
                Gender: <strong>{gender}</strong>
            </p>
            <p>
                Current Height: <strong>{height}</strong>
            </p>
            <p>
                Current Weight: <strong>{weight}</strong>
            </p>
            <p>
                Current Age: <strong>{age}</strong>
            </p>
        </div>
    );
}

export default PersonInfo;
