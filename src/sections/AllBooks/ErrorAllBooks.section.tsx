import { Container } from '../../components/Container';

export const ErrorAllBooksSection = (): JSX.Element => {
    return (
        <section className='bg-slate-50 pt-9 pb-14'>
            <Container>
                <h2 className='text-center text-3xl mt-6 text-slate-900 font-medium'>Error happened during search :{'('}</h2>
                <p className='text-center text-lg mt-1'>Please, create an issue in GitHub or contact with Bektemirov Aziz</p>
            </Container>
        </section>
    );
};
