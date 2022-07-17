// Next js
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
// React js
import { Fragment, ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
// Components
import { AllBooksSection, LoadingAllBooksSection, ErrorAllBooksSection, NotFoundAllBooksSection } from '../../../sections/AllBooks';
// Handlers
import { fetchHandler } from '../../../handlers/fetch.handler';
// Interfaces
import { IAllBooksAPIResponse } from '../../../interfaces';

const BooksPage: NextPage = () => {
    let renderedContent: ReactNode = null;
    const booksPerPage = useMemo(() => 20, []);
    // Next.js router
    const { query, isReady, back } = useRouter();
    // States
    const [fetchError, setFetchError] = useState(false);
    const [fetchLoading, setFetchLoading] = useState(false);
    const [booksData, setBooksData] = useState<IAllBooksAPIResponse>({ amount: -1, books: [] });


    const getAllBooks = useCallback(
        async (pageId: string | undefined | string[]) => {
            try {
                setFetchLoading(true);
                if (pageId === undefined || isNaN(+pageId)) {
                    console.log(pageId);
                    throw new Error('PageId is not a number');
                }
                const parsedPageId = +pageId;

                const booksAPIData = await fetchHandler<IAllBooksAPIResponse>(`${window.location.origin}/api/all-books`, {
                    method: 'POST',
                    body: JSON.stringify({ skip: booksPerPage * (parsedPageId - 1), take: booksPerPage }),
                });
                setBooksData(booksAPIData);
                setFetchLoading(false);
            } catch (error) {
                console.log(error);
                setFetchError(true);
                setFetchLoading(false);
            }
        },
        [booksPerPage],
    );

    useEffect(() => {
        if (isReady) {
            getAllBooks(query.pageId);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isReady, query.pageId]);

    if (fetchLoading && !fetchError) {
        renderedContent = <LoadingAllBooksSection />;
    }

    if (fetchError && !fetchLoading) {
        renderedContent = <ErrorAllBooksSection />;
    }

    if (fetchLoading === false && fetchError === false && booksData.books.length === 0 && booksData.amount !== -1) {
        renderedContent = <NotFoundAllBooksSection back={back} />;
    }

    if (fetchLoading === false && fetchError === false && booksData.books.length > 0) {
        renderedContent = <AllBooksSection
            amount={booksData.amount}
            books={booksData.books}
            showPerPage={booksPerPage}
            currentPage={+(query.pageId as string)}
        />;
    }

    return (
        <Fragment>
            <Head>
                <title>All Book - WUTLIB</title>
                <style dangerouslySetInnerHTML={{ __html: '#__next{min-height: 100%;}' }} />
            </Head>
            <Fragment>
                {renderedContent}
            </Fragment>
        </Fragment>
    );
};

export default BooksPage;

