import { IBook } from './book.interface';

export interface IAllBooksAPIBody {
    skip: number;
    take: number;
}

export interface IAllBooksAPIResponse {
    amount: number;
    books: IBook[];
}

export interface ISearchBooksAPIBody {
    searchedValue: string;
}

export interface ISearchBooksAPIResponse {
    amount: number;
    books: IBook[];
}
