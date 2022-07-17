import Link from 'next/link';
import { FC } from 'react';
import { NavLinkProps } from './NavLink.props';


const NavLink: FC<NavLinkProps> = ({ children, href }) => {
    return (
        <li>
            <Link href={href}>
                <a className='text-1.5xl text-white hover:text-blue-500 duration-200'>
                    {children}
                </a>
            </Link>
        </li>
    );
};

export default NavLink;