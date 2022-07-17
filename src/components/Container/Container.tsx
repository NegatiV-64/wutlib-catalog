import { FC } from 'react';
import cn from 'classnames';
import { ContainerProps } from './Container.props';

export const Container:FC<ContainerProps> = ({children, className}) => {
  return (
    <div className={cn('container px-5 mx-auto th:px-5', className)}>
      {children}
    </div>
  );
};