/* eslint-disable react/button-has-type */
import { FC } from 'react';
import cn from 'classnames';
import { ButtonProps } from './Button.props';
import Link from 'next/link';

export const Button: FC<ButtonProps> = ({ children, className, href, onClick, type }) => {
  const coreClasses = 'w-fit bg-blue-600 text-white text-lg px-4 py-2 rounded-xl duration-200 hover:bg-blue-700';
  
  
  if (href) {
    return (
      <Link href={href}>
        <a className={cn(coreClasses, className)}>
          {children}
        </a>
      </Link>
    );
  }

  return (
    <button className={cn(coreClasses, className)} onClick={onClick} type={type}>
      {children}
    </button>
  );
};