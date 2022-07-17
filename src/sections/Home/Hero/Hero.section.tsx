import { Container } from '../../../components/Container';

export const HeroSection = () => {
    return (
        <section className="bg-[url('/images/library.jpg')] h-96 flex justify-center items-center">
            <Container>
                <h1
                    className="
                    font-light rounded-md text-6xl mx-auto bg-white w-fit h-fit flex justify-center items-center px-5 py-5 
                    th:text-center th:text-4xl
                    sm:text-center md:text-center
                    ">
                    WUTLIB Textbook Catalog
                </h1>
            </Container>
        </section>
    );
};
