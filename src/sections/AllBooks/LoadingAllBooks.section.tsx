import { BookCardRow } from '../../components/BookCard';
import { Container } from '../../components/Container';
import { LoadingCard } from '../../components/LoadingCard';

export const LoadingAllBooksSection = (): JSX.Element => {
    return (
        <section className='bg-slate-50 pt-9 pb-14'>
            <Container>
                <h1 className='text-4xl font-medium text-center mb-6'>List of Books</h1>
                <BookCardRow>
                    <LoadingCard />
                    <LoadingCard />
                    <LoadingCard />
                    <LoadingCard />
                    <LoadingCard />
                    <LoadingCard />
                    <LoadingCard />
                    <LoadingCard />
                </BookCardRow>
            </Container>
        </section>
    );
};