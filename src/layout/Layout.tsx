import { FC, Fragment, ReactNode } from 'react';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';

export const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <Fragment>
            <Header />
            {children}
            <Footer />
        </Fragment>
    );
};

interface LayoutProps {
    children: ReactNode;
}