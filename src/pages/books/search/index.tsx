import type { NextPage } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';
import { SearchBookSection } from '../../../sections/SearchBook';

const SearchPage: NextPage = () => {
    return (
        <Fragment>
            <Head>
                <title>Find book - WUTLIB</title>
                <style dangerouslySetInnerHTML={{ __html: '#__next{min-height: 100%;}' }} />
            </Head>
            <Fragment>
                <SearchBookSection />
            </Fragment>
        </Fragment>
    );
};

export default SearchPage;