---
to: <%= absPath %>/<%= component_name %>.tsx
---
import { FC } from 'react';
import cn from 'classnames';
import { <%= component_name %>Props } from './<%= component_name %>.props';

import styles from './<%= component_name %>.module.css';

export const <%= component_name %>:FC<<%= component_name %>Props> = ({}) => {
  return (
    <div></div>
  );
};