import type { NextPage } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';
import { ContactsSection } from '../sections/Contacts';

const Contact: NextPage = () => {
    return (
        <Fragment>
            <Head>
                <title>Contacts - WUTLIB</title>
                <style dangerouslySetInnerHTML={{ __html: '#__next{min-height: 100%;}' }} />
            </Head>
            <Fragment>
                <ContactsSection />
            </Fragment>
        </Fragment>
    );
};

export default Contact;