import Link from 'next/link';
import { FC } from 'react';
import { PaganationProps } from './Paganation.props';

export const Paganation: FC<PaganationProps> = ({ amount, currentPage, showPerPage }) => {
    const amountOfPages = Math.ceil(amount / showPerPage);
    const arrayForLinks: undefined[] = Array.from(new Array(amountOfPages));

    return (
        <div className='w-fit flex py-2 mt-5 mx-auto gap-x-3'>
            {
                arrayForLinks.map((_, index) => {
                    const loopedPage = index + 1;

                    if (currentPage === loopedPage) {
                        return (
                            <a className='rounded-full bg-blue-600 text-white text-xl px-3 py-1 flex items-center justify-center' key={index}>
                                {loopedPage}
                            </a>
                        );
                    }

                    return (
                        <Link key={index} href={`/books/page/${index + 1}`}>
                            <a className='rounded-full bg-slate-700 text-white text-xl px-3 py-1 flex items-center justify-center' >
                                {index + 1}
                            </a>
                        </Link>
                    );
                })
            }
        </div>
    );
};
