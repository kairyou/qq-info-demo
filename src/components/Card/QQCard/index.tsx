import React, { PropsWithChildren } from 'react';
import './index.css';

interface Props {
  className?: string;
  data?: {
    img?: string;
    name?: string;
    text?: string;
  };
  style?: React.CSSProperties;
}

/**
 * Card for displaying QQ user info
 */
export default function QQCard(props: PropsWithChildren<Props>) {
  const { className, data, style } = props;
  if (!data?.name) return <></>;
  return (
    <div className={`Card ${className}`} style={style}>
      {data.img && (
        <div className='Card-image'>
          <img src={data.img} alt='' />
        </div>
      )}
      <div className='Card-body'>
        <h4>{data.name}</h4>
        <p>{data.text}</p>
      </div>
    </div>
  );
}
