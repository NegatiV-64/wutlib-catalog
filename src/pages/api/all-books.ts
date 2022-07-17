import { NextApiRequest, NextApiResponse } from 'next';
import allBooksData from '../../data/test.json';

export default function AllBooksHandler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const skip = req.body.skip as number | undefined;
        const take = req.body.take as number | undefined;

        if (skip === undefined || take === undefined) {
            res.status(403).json('bad body');
            return null;
        }

        const books = [...allBooksData].reverse();
        const neededBooks = books.slice(skip, (skip + take));

        res.status(200).json({ amount: books.length, books: neededBooks });
    } else {
        res.status(403).json('wrong method');
    }
}