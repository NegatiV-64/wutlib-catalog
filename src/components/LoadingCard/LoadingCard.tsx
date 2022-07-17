import { FC } from 'react';
import cn from 'classnames';
import { LoadingCardProps } from './LoadingCard.props';

import styles from './LoadingCard.module.css';

export const LoadingCard: FC<LoadingCardProps> = ({ className }) => {
  return (
    <article className={cn('flex flex-col pt-3 pb-5 px-6 bg-white rounded-lg overflow-hidden shadow-xl', styles.card, className)}>
      <div className={cn('flex justify-center items-center mx-auto', styles.image, styles.skeleton)} />
      <div className={cn('mb-2 h-7 mt-2', styles.title, styles.skeleton)}></div>
      <div className={cn('mb-2 h-6', styles.text, styles.skeleton)}></div>
      <div className={cn('mb-2 h-6', styles.text, styles.skeleton)}></div>
      <div className={cn('mb-2 h-6', styles.text, styles.skeleton)}></div>
      <div className={cn('w-28 h-11 mt-auto', styles.text, styles.skeleton)}></div>
    </article>
  );
};