import { NextApiRequest, NextApiResponse } from 'next';
import allBooksData from '../../data/test.json';

export default function AllBooksHandler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const searchedValue = req.body.searchedValue as string | undefined;
        if (searchedValue === undefined) {
            res.status(403).json('bad body');
            return null;
        }

        const books = [...allBooksData].reverse();
        const searchedBooks = books.filter((book) => book.book_title.toLocaleLowerCase().trim().includes(searchedValue.toLocaleLowerCase().trim()));

        res.status(200).json({ amount: searchedBooks.length, books: searchedBooks });
    } else {
        res.status(403).json('wrong method');
    }
}