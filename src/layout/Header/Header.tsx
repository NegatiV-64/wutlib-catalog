// React.js
import { Fragment, useEffect, useState } from 'react';
// Next.js
import Link from 'next/link';
import { useRouter } from 'next/router';
// Components
import { Container } from '../../components/Container';
import NavLink from './NavLink/NavLink';
// Icons
import { GiHamburgerMenu } from 'react-icons/gi';
import { SiGithub, SiTelegram } from 'react-icons/si';
// Other
import cn from 'classnames';
import useMediaQuery from '../../hooks/useMediaQuery';

export const Header = (): JSX.Element => {
    const isMobile = useMediaQuery('(max-width: 767px)');

    return (
        <header className="bg-slate-700 pt-4 pb-4 th:relative">
            <Container className='grid grid-cols-header th:grid-cols-2 sm:grid-cols-2 md:grid-cols-2'>
                <Link href='/'>
                    <a className='text-white text-3xl font-medium justify-self-start flex items-center justify-center th:justify-self-start'>WUTLIB</a>
                </Link>
                {
                    isMobile
                        ? <MobileNav />
                        : <DesktopNav />
                }
            </Container>
        </header>
    );
};

export const MobileNav = () => {
    const [mobileMenuShow, setMobileMenuShow] = useState(false);
    const { asPath } = useRouter();

    useEffect(() => {
        setMobileMenuShow(false);
    }, [asPath]);

    return (<Fragment>
        <button onClick={() => setMobileMenuShow(prevValue => !prevValue)} className='block relative z-20 justify-self-end text-3xl text-white' type={'button'}>
            <GiHamburgerMenu />
        </button>
        <div className={cn(
            'opacity-0 duration-200 absolute px-5 flex flex-col justify-center top-0 bg-slate-800 w-full h-screen', {
            ['-z-10 -left-full']: mobileMenuShow === false,
            ['opacity-100 z-10 left-0']: mobileMenuShow === true,
        }
        )}>
            <nav>
                <ul className='flex flex-col items-center gap-6'>
                    <NavLink href='/'>
                        Home
                    </NavLink>
                    <NavLink href='/books/page/1'>
                        Books
                    </NavLink>
                    <NavLink href='/books/search'>
                        Find book
                    </NavLink>
                    <NavLink href='/contacts'>
                        Contacts
                    </NavLink>
                </ul>
            </nav>
            <ul className='justify-center mt-8 flex items-center gap-x-4 justify-self-end'>
                <li className='group p-1 bg-transparent hover:bg-white rounded duration-200'>
                    <a className='rounded-md text-white hover:bg-white group-hover:text-slate-700 text-5xl group' href="https://github.com/NegatiV-64" target={'_blank'} rel={'noopener noreferrer'}>
                        <SiGithub className='group-hover:scale-110 duration-200' />
                    </a>
                </li>
                <li className='group p-1 bg-transparent hover:bg-white rounded duration-200'>
                    <a className='rounded-md text-white hover:bg-white group-hover:text-slate-700 text-5xl group' href="https://t.me/wutlibuztextbooks" target={'_blank'} rel={'noopener noreferrer'}>
                        <SiTelegram className='group-hover:scale-110  duration-200' />
                    </a>
                </li>
            </ul>
        </div>
    </Fragment>
    );
};

export const DesktopNav = () => {
    return (
        <Fragment>
            <nav className='flex justify-center'>
                <ul className='flex items-center gap-6'>
                    <NavLink href='/'>
                        Home
                    </NavLink>
                    <NavLink href='/books/page/1'>
                        Books
                    </NavLink>
                    <NavLink href='/books/search'>
                        Find book
                    </NavLink>
                    <NavLink href='/contacts'>
                        Contacts
                    </NavLink>
                </ul>
            </nav>
            <ul className='flex items-center gap-x-4 justify-self-end'>
                <li className='group p-1 bg-transparent hover:bg-white rounded duration-200'>
                    <a className='rounded-md text-white hover:bg-white group-hover:text-slate-700 text-3xl group' href="https://github.com/NegatiV-64" target={'_blank'} rel={'noopener noreferrer'}>
                        <SiGithub className='group-hover:scale-110 duration-200' />
                    </a>
                </li>
                <li className='group p-1 bg-transparent hover:bg-white rounded duration-200'>
                    <a className='rounded-md  text-white hover:bg-white group-hover:text-slate-700  text-3xl group' href="https://t.me/wutlibuztextbooks" target={'_blank'} rel={'noopener noreferrer'}>
                        <SiTelegram className='group-hover:scale-110  duration-200' />
                    </a>
                </li>
            </ul>
        </Fragment>
    );
};