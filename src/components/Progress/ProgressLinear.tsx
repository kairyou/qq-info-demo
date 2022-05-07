import React from 'react';
import './index.css';

interface Props {
  size?: number | string;
  loading?: boolean;
}

export default function ProgressLinear(props: Props) {
  const { size = 2, loading = true } = props;
  return (
    <div className='Progress-linear' style={{ height: `${size}px` }}>
      <div className='Progress-linear__background'></div>
      <div
        className={[
          'Progress-linear__indeterminate',
          loading && 'Progress-linear--active',
        ].join(' ')}
      >
        <div className='Progress-linear__indeterminate long'></div>
        <div className='Progress-linear__indeterminate short'></div>
      </div>
    </div>
  );
}
