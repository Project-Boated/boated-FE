import React from 'react';

import { StyledInput } from './style';

export interface InputProps {
  type: 'text';
  width: number;
  height: number;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ type, width, height, value, placeholder, onChange }: InputProps) => {
  return (
    <StyledInput
      type={type}
      width={width}
      height={height}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
