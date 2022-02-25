import React, { FC, useState } from 'react';

interface ITextFieldProps {
  title: string;
  name: string;
  value?: string | number;
  placeholder?: string;
  disabled?: boolean;
  error?: string | null;
  fullWidth?: boolean;
  className?: string;
  onChange: (e: any) => void;
}

const TextField: FC<ITextFieldProps> = (props) => {
  const {
    title,
    name,
    placeholder = '',
    disabled = false,
    fullWidth = true,
    className = '',
    error,
    onChange,
  } = props;
  const [value, setValue] = useState('');

  return (
    <div className={`TextBoxRoot ${className}`}>
      <p>{title}</p>
      <input
        type='text'
        name={name}
        value={value}
        className={fullWidth ? 'w-100' : ''}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e);
        }}
        placeholder={placeholder}
        disabled={disabled}
      />
      {error && <p className='TextBoxError'>{error}</p>}
    </div>
  );
};

export default TextField;
