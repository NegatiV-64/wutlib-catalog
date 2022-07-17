import { ChangeEvent, FormEvent, ReactNode, useState } from 'react';
import { BookCard, BookCardRow } from '../../components/BookCard';
import { Container } from '../../components/Container';
import { LoadingCard } from '../../components/LoadingCard';
import { fetchHandler } from '../../handlers/fetch.handler';
import { ISearchBooksAPIResponse } from '../../interfaces';

export const SearchBookSection = (): JSX.Element => {
    let renderedContent: ReactNode = null;
    const [searchBookInput, setSearchBookInput] = useState('');
    const [foundBooks, setFoundBooks] = useState<ISearchBooksAPIResponse>({ amount: -1, books: [] });
    const [fetchLoading, setFetchLoading] = useState(false);
    const [fetchError, setFetchError] = useState(false);

    const onInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchBookInput(e.target.value);
    };

    const onSearchHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setFetchLoading(true);
        try {
            const books = await fetchHandler<ISearchBooksAPIResponse>(`${window.location.origin}/api/search-books`, {
                method: 'POST',
                body: JSON.stringify({ searchedValue: searchBookInput })
            });

            setFoundBooks(books);
            setFetchLoading(false);
        } catch (error) {
            console.log(error);
            setFetchError(true);
            setFetchLoading(false);
        }
    };

    if (foundBooks.books.length === 0 && foundBooks.amount < 0 && searchBookInput === '') {
        renderedContent = <h2 className='text-center text-2xl mt-6'>Please, type to search books</h2>;
    }

    if (foundBooks.amount === 0 && fetchError === false && fetchLoading === false) {
        renderedContent = (
            <div>
                <h2 className='text-center text-2xl mt-6 text-slate-900 font-medium'>No books were found :{'('}</h2>
                <p className='text-center text-lg mt-1'>Try to contact with the Librarian about the searched book</p>
            </div>
        );
    }

    if (fetchLoading === true) {
        renderedContent = (
            <BookCardRow>
                <LoadingCard />
                <LoadingCard />
                <LoadingCard />
                <LoadingCard />
            </BookCardRow>
        );
    }

    if (fetchError === true) {
        renderedContent = (
            <div>
                <h2 className='text-center text-2xl mt-6 text-slate-900 font-medium'>Error happened during search :{'('}</h2>
                <p className='text-center text-lg mt-1'>Please, create an issue in GitHub or contact with Bektemirov Aziz</p>
            </div>
        );
    }

    if (fetchError === false && fetchLoading === false && foundBooks.amount > 0) {
        renderedContent = (
            <BookCardRow>
                {
                    foundBooks.books.map((book) => {
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
                    })
                }
            </BookCardRow>
        );
    }

    return (
        <section className="pt-4 pb-12 bg-slate-100 h-full flex-grow">
            <Container>
                <h1 className="text-4xl text-center font-medium mb-4 text-slate-900">Find a book:</h1>
                <form onSubmit={onSearchHandler} className='flex justify-center gap-3 mb-8 th:flex-col sm:flex sm:justify-between md:flex md:justify-between'>
                    <input
                        placeholder='Type here to search'
                        required={true} minLength={3}
                        className="bg-white py-2 text-xl pl-4 pr-2 w-1/4 rounded-xl outline-none
                    border-spacing-px border-2 border-transparent duration-200 shadow
                    focus:border-blue-500 focus:shadow-md
                    th:w-4/5 th:mx-auto
                    sm:w-9/12 
                    md:w-9/12
                    "
                        value={searchBookInput} onChange={onInputChangeHandler} type={'search'}
                    />
                    <button className='
                    bg-blue-600 rounded-xl text-lg px-5 shadow-md text-white py-3 
                    duration-200 hover:bg-blue-700 hover:shadow-lg
                    th:w-fit th:mx-auto
                    ' type={'submit'}>Search</button>
                </form>
                {renderedContent}
            </Container>
        </section>
    );
};
