import { FC, ReactNode } from 'react';
import cn from 'classnames';
import { BookCardProps } from './BookCard.props';
import Image from 'next/image';
import { Button } from '../Button';

export const BookCard: FC<BookCardProps> = ({ className, authors, year, bookId, cover, edition, title }) => {
  const bookAuthors = authors.join(', ');

  return (
    <article className={cn('flex flex-col pt-3 pb-5 px-6 th:w-10/12 th:mx-auto', 'bg-white rounded-lg overflow-hidden shadow-xl', className)}>
      <picture className='flex justify-center items-center'>
        <Image height={220} width={150} objectFit="contain" src={cover.replace('./', '/')} alt={title} />
      </picture>
      <h3 className='font-medium text-xl mb-2 text-slate-900'>{title}</h3>
      <p className='text-base text-slate-900'><span className='font-medium'>Authors:</span> {bookAuthors}</p>
      <p className='text-base text-slate-900'><span className='font-medium'>Edition</span>: {edition}</p>
      <p className='text-base text-slate-900 mb-2'><span className='font-medium'>Year:</span> {year}</p>
      <Button className='mt-auto th:block th:mx-auto' href={`/books/book/${bookId}`}>
        Read More
      </Button>
    </article>
  );
};

export const BookCardRow: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className='grid grid-cols-books th:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-12'>
      {children}
    </div>
  );
};