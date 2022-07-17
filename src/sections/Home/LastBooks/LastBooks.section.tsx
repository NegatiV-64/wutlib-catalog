import { FC } from 'react';
import { BookCard, BookCardRow } from '../../../components/BookCard';
import { Button } from '../../../components/Button';
import { Container } from '../../../components/Container';
import { LatestBooksProps } from './LastBooks.props';

export const LastBooksSection: FC<LatestBooksProps> = ({ books }) => {
    return (
        <section className='py-10 bg-neutral-50'>
            <Container>
                <h2 className='mb-6 text-4xl font-medium text-center text-slate-900'>Recently added books:</h2>
                <BookCardRow>
                    {books.map((book) => {
                        return (
                            <BookCard
                                cover={book.book_cover}
                                edition={book.book_edition}
                                title={book.book_title}
                                bookId={book.book_id}
                                key={book.book_id}
                                year={book.book_year}
                                authors={book.book_authors}
                            />
                        );
                    })}
                </BookCardRow>
                <Button href='/books/page/1' className='text-2xl px-6 mx-auto block mt-8 th:text-xl'>
                    View More
                </Button>
            </Container>
        </section>
    );
};