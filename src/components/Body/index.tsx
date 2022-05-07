import React, { PropsWithChildren } from 'react';
import './index.css';

interface Props {
  style?: React.CSSProperties;
}

/**
 * App body wrap
 */
export default function Body(props: PropsWithChildren<Props>) {
  const { children, style } = props;
  return (
    <section className='App-body' style={style}>
      {children}
    </section>
  );
}
