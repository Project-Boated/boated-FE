import React from 'react';

import { IconPropsWithSVGProps } from '@/components/atoms/Icon/type';

const TaskFavorite = (props: IconPropsWithSVGProps) => (
  <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M13.16 14.63C13.67 14.27 14 13.67 14 13L13.99 2C13.99 0.9 13.1 -3.93402e-08 12 -8.74228e-08L2 -5.24537e-07C0.9 -5.72619e-07 0.0100002 0.899999 0.0100001 2L-5.68248e-07 13C-5.97535e-07 13.67 0.329999 14.27 0.84 14.63L6.42 18.59C6.77 18.84 7.23 18.84 7.58 18.59L13.16 14.63Z"
      fill={props.color}
    />
  </svg>
);

export default TaskFavorite;
