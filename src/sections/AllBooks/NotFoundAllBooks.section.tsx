import { Button } from '../../components/Button';
import { Container } from '../../components/Container';

export const NotFoundAllBooksSection = ({ back }: { back: () => void }): JSX.Element => {
    return (
        <section className='bg-slate-50 pt-9 pb-14'>
            <Container>
                <h2 className='text-center text-3xl mt-6 text-slate-900 font-medium'>No books are found :{'('}</h2>
                <p className='text-center text-lg mt-1'>You can go back or if you think that it is an error, please create an issue in GitHub or contact with Bektemirov Aziz</p>
                <Button className='mx-auto block mt-4' onClick={() => back()}>Go back</Button>
            </Container>
        </section>
    );
};