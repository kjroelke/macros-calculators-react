import { memo } from 'react';
import Logo from './Logo';

function Header({ title, subtitle }: { title: string; subtitle: string }) {
    return (
        <header className='header bg-white border-b-[20px] border-primary px-6 py-7 sm:px-2 sm:py-8 flex justify-center items-center gap-5'>
            <figure className='header__img max-w-24 aspect-square w-full h-full'>
                <Logo />
            </figure>
            <div className='text-primary'>
                <h1 className='text-3xl'>{title}</h1>
                <span>{subtitle}</span>
            </div>
        </header>
    );
}
export default memo(Header);
