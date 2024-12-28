import { memo } from 'react';
import Logo from './Logo';

function Header({ title, subtitle }: { title: string; subtitle: string }) {
    return (
        <header className='header dark:bg-stone-900  bg-white border-b-4 shadow-md border-primary dark:border-primary-light p-2 flex justify-center items-center gap-5'>
            <figure className='header__img max-w-24 aspect-square w-full h-full'>
                <Logo />
            </figure>
            <div className='text-primary dark:text-stone-200'>
                <h1 className='text-3xl'>{title}</h1>
                <span>{subtitle}</span>
            </div>
        </header>
    );
}
export default memo(Header);
