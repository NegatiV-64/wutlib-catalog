import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';
import { getJSONDataHandler } from '../handlers/get-json.handler';
import { IBook } from '../interfaces';
import { HeroSection, LastBooksSection } from '../sections/Home';

const HomePage: NextPage<HomePageProps> = ({ last_books }) => {
  return (
    <Fragment>
      <Head>
        <title>Home - WUTLIB</title>
      </Head>
      <Fragment>
        <HeroSection />
        <LastBooksSection books={last_books} />
      </Fragment>
    </Fragment>
  );
};

export const getStaticProps: GetStaticProps<HomePageStaticProps> = async () => {
  const lastBooksData = (await getJSONDataHandler<IBook[]>('test.json')).reverse().slice(0, 8);

  return {
    props: {
      last_books: lastBooksData
    },
    revalidate: 84200
  };
};

interface HomePageProps {
  last_books: IBook[];
}

interface HomePageStaticProps {
  last_books: IBook[];
}

export default HomePage;