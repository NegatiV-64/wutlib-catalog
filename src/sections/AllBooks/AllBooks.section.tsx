import { FC } from 'react';
import { BookCard, BookCardRow } from '../../components/BookCard';
import { Container } from '../../components/Container';
import { AllBooksProps } from './AllBooks.interface';
import { Paganation } from './Paganation/Paganation';

export const AllBooksSection: FC<AllBooksProps> = ({ amount, books, showPerPage, currentPage }) => {
    return (
        <section className='bg-slate-50 pt-9 pb-14'>
            <Container>
                <h1 className='text-4xl font-medium text-center mb-6'>List of Books</h1>
                <BookCardRow>
                    {books.map((book) => {
                        return (
                            <BookCard
                                key={book.book_id}
                                bookId={book.book_id}
                                authors={book.book_authors}
                                cover={book.book_cover}
                                edition={book.book_edition}
                                title={book.book_title}
                                year={book.book_year}
                            />
                        );
                    })}
                </BookCardRow>
                <Paganation amount={amount} showPerPage={showPerPage} currentPage={currentPage} />
            </Container>
        </section>
    );
};