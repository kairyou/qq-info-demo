import React, { PropsWithChildren } from 'react';
import './index.css';

interface Props {
  title?: string;
}

/**
 * Header
 */
export default function Header(props: PropsWithChildren<Props>) {
  const { title, children } = props;
  return (
    <header className="App-header">
      {title}
      {children}
    </header>
  )
}