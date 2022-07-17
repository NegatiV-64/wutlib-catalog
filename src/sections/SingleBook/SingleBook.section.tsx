import Image from 'next/image';
import { FC } from 'react';
import { Container } from '../../components/Container';
import { SingleBookProps } from './SingleBook.props';

export const SingleBookSection: FC<SingleBookProps> = ({ bookData }) => {
    return (
        <section className='pt-9 pb-9'>
            <Container className='grid grid-cols-2 gap-8'>
                <div className='justify-self-center'>
                    <Image src={bookData.book_cover.replace('./', '/')} alt={bookData.book_title} objectFit="contain" placeholder="blur" blurDataURL="data:image/gif;base64,R0lGODlhAQABAPAAAEhpjP///yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" height={403} width={302} />
                </div>
                <div>
                    <h1 className='mb-2 text-4xl font-medium text-slate-900'>{bookData.book_title}</h1>
                    <p className='mb-1 text-lg text-slate-900'><span className='font-medium'>Author:</span> {bookData.book_authors.join(', ')}</p>
                    <p className='mb-1 text-lg text-slate-900'><span className='font-medium'>Year published:</span> {bookData.book_year}</p>
                    <p className='mb-1 text-lg text-slate-900'><span className='font-medium'>Edition:</span> {bookData.book_edition}</p>
                    <p className='mb-1 text-lg text-slate-900'><span className='font-medium'>ISBN:</span> {bookData.book_isbn}</p>
                    <p className='mb-1 text-lg text-slate-900'><span className='font-medium'>LOC number:</span> {bookData.book_loc}</p>
                    <p className='mb-1 text-lg text-slate-900'><span className='font-medium'>Number of pages:</span> {bookData.book_length}</p>
                </div>
            </Container>
        </section>
    );
};
