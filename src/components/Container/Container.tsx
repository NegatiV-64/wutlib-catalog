import { FC } from 'react';
import cn from 'classnames';
import { ContainerProps } from './Container.props';

export const Container:FC<ContainerProps> = ({children, className}) => {
  return (
    <div className={cn('container mx-auto', className)}>
      {children}
    </div>
  );
};