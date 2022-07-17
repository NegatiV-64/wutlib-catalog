import { IBook } from '../../interfaces';

export interface AllBooksProps {
    amount: number;
    books: IBook[];
    showPerPage: number;
    currentPage: number;
}