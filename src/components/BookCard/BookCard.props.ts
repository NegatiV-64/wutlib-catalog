export interface BookCardProps {
    title: string;
    bookId: number;
    cover: string;
    authors: string[];
    edition: number;
    className?: string;
    year: number;
}