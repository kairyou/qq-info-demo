import React, { ChangeEvent, FormEvent, PropsWithChildren } from 'react';
import ProgressLinear from 'components/Progress/ProgressLinear';
import './index.css';

interface Props {
  id?: string;
  // ref?: any;
  // className?: string;
  type?: 'text' | 'password' | 'number' | 'url' | 'email' | 'tel';
  // name?: string;
  label?: string;
  error?: string | any; // error message
  value?: any;
  placeholder?: string;
  maxLength?: number;
  disabled?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onInput?: (event: FormEvent<HTMLInputElement>) => void;
  onBlur?: (event: FormEvent<HTMLInputElement>) => void;
  layout?: 'underline';
  loading?: boolean;
}

/**
 * TextField
 */
export default function Input(props: PropsWithChildren<Props>) {
  const {
    id,
    label,
    type = 'text',
    layout = 'underline',
    placeholder,
    maxLength,
    onChange,
    onInput,
    onBlur,
    value,
    disabled,
    error,
    loading,
  } = props;
  return (
    <div
      className={[
        'Input',
        `Input-${layout}`,
        error && 'Input-error',
        loading && 'Input-loading',
      ].join(' ')}
    >
      <label className='Input-label' htmlFor={id}>
        {label}
      </label>
      <div className='Input-control'>
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          onInput={onInput}
          onBlur={onBlur}
          value={value}
          disabled={disabled}
          maxLength={maxLength}
        />
        {loading && <ProgressLinear size='2' />}
        {error && <p className='Input-message'>{error}</p>}
      </div>
    </div>
  );
}
