import {  MouseEventHandler, ReactNode } from 'react';

export interface ButtonProps {
    className?: string;
    href?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    children: ReactNode;
    type?: 'button' | 'submit' | 'reset';
}