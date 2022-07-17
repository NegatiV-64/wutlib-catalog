import Link from 'next/link';
import { Container } from '../../components/Container';
import NavLink from './NavLink/NavLink';
import { SiGithub, SiTelegram } from 'react-icons/si';

export const Header = (): JSX.Element => {
    return (
        <header className="bg-slate-700 pt-4 pb-5">
            <Container className='grid grid-cols-header'>
                <Link href='/'>
                    <a className='text-white text-3xl font-medium justify-self-start flex items-center justify-center'>WUTLIB</a>
                </Link>
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
                            <SiGithub className='group-hover:scale-110 duration-200'/>
                        </a>
                    </li>
                    <li className='group p-1 bg-transparent hover:bg-white rounded duration-200'>
                        <a className='rounded-md  text-white hover:bg-white group-hover:text-slate-700  text-3xl group' href="https://t.me/wutlibuztextbooks" target={'_blank'} rel={'noopener noreferrer'}>
                            <SiTelegram className='group-hover:scale-110  duration-200'/>
                        </a>
                    </li>
                </ul>
            </Container>
        </header>
    );
};