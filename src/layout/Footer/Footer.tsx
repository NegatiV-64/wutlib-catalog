import { SiReact } from 'react-icons/si';
import { Container } from '../../components/Container';

export const Footer = (): JSX.Element => {
    // const darkTheme = 'dark:bg-slate-900';

    return (
        <footer className='mt-auto bg-slate-200 pt-4'>
            <Container className='pb-4'>
                <p className='text-center text-slate-900 text-lg'>Found an error in the text? <a className='text-blue-600' href="">Create an issue</a> in GitHub!</p>
            </Container>
            <div className='pb-4 bg-slate-700 pt-4'>
                <Container>
                    <p className='flex text-white justify-center text-lg items-center gap-1'>
                        Developed with <SiReact title='React.js' style={{ color: '#61DAFB' }} className='text-2xl animate-spin-slow' /> by Bektemirov Aziz
                    </p>
                </Container>
            </div>
        </footer>
    );
};
