import React from 'react';
import SectionContainer from '../ui/SectionContainer';
export default function Form({
    id,
    children,
    classList,
}: {
    id?: string;
    classList?: string;
    children: React.ReactNode;
}) {
    return (
        <SectionContainer
            id={id}
            className={`col-start-1 dark:bg-stone-900 dark:text-stone-200 text-primary bg-white flex flex-col items-stretch ${classList}`}>
            <div className='flex flex-col items-stretch gap-y-3 w-full'>
                {children}
            </div>
        </SectionContainer>
    );
}
