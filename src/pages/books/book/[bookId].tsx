import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';
import { getJSONDataHandler } from '../../../handlers/get-json.handler';
import { IBook } from '../../../interfaces';
import { SingleBookSection } from '../../../sections/SingleBook';

const BookPage: NextPage<BookPageProps> = ({ book_data }) => {
    return (
        <Fragment>
            <Head>
                <style dangerouslySetInnerHTML={{ __html: '#__next{min-height: 100%;}' }} />
                <title>{book_data.book_title} - WUTLIB</title>
            </Head>
            <Fragment>
                <SingleBookSection bookData={book_data} />
            </Fragment>
        </Fragment>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const booksData = await getJSONDataHandler<IBook[]>('test.json');

    const booksPaths = booksData.map((book) => {
        return {
            params: {
                bookId: `${book.book_id}`
            }
        };
    });

    return {
        paths: booksPaths,
        fallback: 'blocking'
    };
};

export const getStaticProps: GetStaticProps<BookPageStaticProps> = async (context) => {
    const params = context.params;
    if (!params) {
        return { notFound: true };
    }
    const bookId = params.bookId as string;
    if (bookId === undefined && isNaN(+bookId)) {
        return { notFound: true };
    }

    const booksData = await getJSONDataHandler<IBook[]>('test.json');
    const book = booksData.find((item) => item.book_id === +bookId);

    if (book === undefined) {
        return { notFound: true };
    }

    return {
        props: {
            book_data: book,
            params: context.params
        }
    };
};

interface BookPageProps {
    book_data: IBook;
}

interface BookPageStaticProps {
    book_data?: IBook;
}

export default BookPage;