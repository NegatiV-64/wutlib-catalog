import { FaPhoneAlt, FaTelegram, FaEnvelope } from 'react-icons/fa';
import { Container } from '../../components/Container';

export const ContactsSection = (): JSX.Element => {
    return (
        <section className='pt-6 pb-10 bg-slate-50 flex-1'>
            <Container>
                <h1 className='text-4xl font-medium text-center mb-5'>Contacts</h1>
                <div className='grid grid-cols-2 gap-10 th:flex th:flex-col sm:flex sm:flex-col'>
                    <div className='shadow-sm bg-white px-5 py-4 rounded-lg'>
                        <h2 className='text-3xl font-medium text-center mb-3 th:text-2xl'>Want to contact with the library?</h2>
                        <div className='mb-4'>
                            <h3 className='text-2xl flex items-center gap-2 th:text-xl'>Library office hours:</h3>
                            <p className='text-lg'><span className=''>- Monday-Friday:</span> <time>09:00</time> - <time>18:00</time> </p>
                            <p className='text-lg'><span className=''>- Saturday:</span> <time>10:00</time> - <time>14:00</time> </p>
                        </div>
                        <address className='not-italic'>
                            <a className='w-fit flex duration-200 hover:text-blue-400 items-center text-lg gap-2 group mb-2' target={'_blank'} rel={'noopener noreferrer'} href="https://t.me/CenterLibrary"><FaTelegram className='duration-200 text-2xl group-hover:text-telegram' /> @CenterLibrary</a>
                            <a className='w-fit flex duration-200 hover:text-blue-400 items-center text-lg gap-2 group' target={'_blank'} rel={'noopener noreferrer'} href="tel:+998 99 916 11 06"><FaPhoneAlt className='duration-200 text-2xl group-hover:text-phone-green' /> +998 99 916 11 06</a>
                        </address>
                    </div>
                    <div className='shadow-sm bg-white px-5 py-4 rounded-lg'>
                        <h2 className='text-3xl font-medium text-center mb-3 th:text-2xl'>Want to contact with the developer?</h2>
                        <address className='not-italic'>
                            <a className='w-fit flex duration-200 hover:text-blue-400 items-center text-lg gap-2 group mb-2' target={'_blank'} rel={'noopener noreferrer'} href="https://t.me/Rick_Decart"><FaTelegram className='duration-200 text-2xl group-hover:text-telegram' /> @Rick_Decart</a>
                            <a className='w-fit flex duration-200 hover:text-blue-400 items-center text-lg gap-2 group mb-2' target={'_blank'} rel={'noopener noreferrer'}  href="mailto:bektemirovaziz64@ya.com"><FaEnvelope className='duration-200 text-2xl group-hover:text-mail' /> bektemirovaziz64@ya.com</a>
                        </address>
                    </div>
                </div>
            </Container>
        </section>
    );
};