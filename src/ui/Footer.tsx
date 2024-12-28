import { memo } from 'react';

function Footer() {
    const today = new Date();
    return (
        <footer
            id='copyright'
            className='flex flex-column justify-center items-stretch text-white bg-primary dark:bg-stone-900 dark:border-t-2 dark:border-primary-light text-center py-8'>
            &copy; {today.getFullYear()} K.J. Roelke
        </footer>
    );
}

export default memo(Footer);
